from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from app.models import User, Color, Fashion
from app.serializers import *
from datetime import date


""" 
user 모델의 username으로 token claim customize (djangorestframework-simplejwt setting)
"""


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # add custom claims
        token['username'] = user.username

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


"""
회원가입, 탈퇴
"""


class CreateUser(APIView):

    def post(self, request, format=None):
        serializer = RegisterUserSerializer(data=request.data)
        if serializer.is_valid():
            new_user = serializer.save()
            if new_user:
                return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteUser(APIView):

    permission_classes = [IsAuthenticated]

    def delete(self, request, format=None):
        try:
            _user = User.objects.get(pk=request.user.id)
            _user.delete()
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


"""
[personal color] : ColorTest(personal color test), ColorTestDetail(test 상세 결과), ColorTestList(test 결과 리스트)
"""


class ColorTest(APIView):
    """
    POST : [personal color test] 얼굴 이미지 받아서 personal color 결과 반환
    """

    parser_classes = [FormParser, MultiPartParser]

    def color_ai_model(self):  # 머신러닝 모델과 연결 필요
        return 'SP'

    def post(self, request, format=None):
        file_obj = request.data['image']
        if file_obj:
            res = self.color_ai_model()  # 머신 러닝 모델과 연결 필요

            # 로그인 유저의 경우 추가로 user_id도 저장해줘야 한다.
            data = {'color': res, 'image': file_obj, 'date': date.today()}
            if request.user.is_authenticated:
                data['user'] = request.user.id

            serializer = ColorSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response({'color': res}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response(status=status.HTTP_400_BAD_REQUEST)


class ColorTestDetail(APIView):
    """
    pk로 디비에서 personal color test 상세정보 꺼내오기, pk는 데이터베이스 Color table의 id
    GET : 이전 personal color test 기록 반환
    DELETE : personal color test 기록 삭제
    """

    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return Color.objects.get(pk=pk)
        except Color.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        color = self.get_object(pk)
        if request.user.id == color.user_id:
            serializer = ColorSerializer(color)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_423_LOCKED)  # locked => 접근할수 없는 자원(내 자원이 아니어서)

    def delete(self, request, pk, format=None):
        color = self.get_object(pk)
        if request.user.id == color.user_id:
            color.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_423_LOCKED)


class ColorTestList(APIView):
    """
    GET : personal color test 기록'들' 반환
    """

    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        colors = user.color_set.all()
        serializer = ColorDigestSerializer(colors, many=True)
        return Response(serializer.data)


"""
[fashion matching test] : FashionTest(fashion matching test), FashionTestDetail(test 상세 결과), FashionTestList(test 결과 리스트)
"""


class FashionTest(APIView):
    """
    POST : [fashion matching test] personal color와 옷 이미지를 분석해 적합도(rate) 반환
    """

    parser_classes = [FormParser, MultiPartParser]

    def fashion_ai_model(self):  # 머신러닝 모델과 연결 필요
        return {'total_match_rate': 50, 'color_match_rate': 50, 'brightness_match_rate': 50, 'saturation_match_rate': 50}

    def post(self, request, format=None):
        file_obj = request.data['image']
        if file_obj:
            data = {'image': file_obj, 'color': request.data['color'], 'date': date.today()}
            res = self.fashion_ai_model()  # 머신 러닝 모델과 연결 필요
            data.update(res)
            # 로그인 유저의 경우 추가로 user_id도 저장해줘야 한다.
            if request.user.is_authenticated:
                data['user'] = request.user.id

            serializer = FashionSerializer(data=data)
            if serializer.is_valid():
                serializer.save()

            return Response({'fashion': res}, status=status.HTTP_201_CREATED)

        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


class FashionTestDetail(APIView):
    """
    pk로 디비에서 fashion matching test 상세정보 꺼내오기, pk는 데이터베이스 Color table의 id
    GET : 이전 fashion matching test 기록 반환
    DELETE : fashion matching test 기록 삭제
    """

    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return Fashion.objects.get(pk=pk)
        except Color.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        fashion = self.get_object(pk)
        serializer = FashionSerializer(fashion)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        fashion = self.get_object(pk)
        fashion.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class FashionTestList(APIView):
    """
    GET : fashion matching test 기록'들' 반환
    """

    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        fashions = user.fashion_set.all()
        serializer = FashionDigestSerializer(fashions, many=True)
        return Response(serializer.data)
