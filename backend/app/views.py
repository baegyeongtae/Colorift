from django.http import Http404
from django.contrib.auth.models import update_last_login
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework_simplejwt.settings import api_settings
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from app.models import User, Color, Fashion
from app.serializers import *


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

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['nickname'] = self.user.nickname

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


"""
[user related api] CreateUser, ChangePassword, ChangeNickname, DeleteUser
"""


class CreateUser(APIView):

    def post(self, request, format=None):
        serializer = RegisterUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChangePassword(APIView):

    def patch(self, request, format=None):
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChangeNickname(APIView):

    permission_classes = [IsAuthenticated]

    def patch(self, request, format=None):
        user = request.user
        user.nickname = request.data['nickname']
        user.save()
        return Response(status=status.HTTP_200_OK)


class DeleteUser(APIView):

    permission_classes = [IsAuthenticated]

    def delete(self, request, format=None):
        try:
            request.user.delete()
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


"""
[personal color] : ColorTest(personal color test), ColorTestDetail(test 상세 결과), ColorShare(SNS 공유), ColorTestList(test 결과 리스트)
"""


class ColorTest(APIView):
    """
    POST : [personal color test] 얼굴 이미지 받아서 personal color 결과 반환
    """

    parser_classes = [FormParser, MultiPartParser]

    def post(self, request, format=None):

        data = {'image': request.data['image']}
        if request.user.is_authenticated:
            data['user'] = request.user.id

        serializer = ColorTestSerializer(data=data)

        if serializer.is_valid():
            instance = serializer.save()
            return Response({
                'id': instance.id.hashid,
                'spring_rate': instance.spring_rate,
                'summer_rate': instance.summer_rate,
                'autumn_rate': instance.autumn_rate,
                'winter_rate': instance.winter_rate
            }, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
            serializer = ColorDetailSerializer(color)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk, format=None):
        color = self.get_object(pk)
        if request.user.id == color.user_id:
            color.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)


class ColorShare(APIView):
    """
    GET : SNS 공유용 정보 반환 (테스트 결과)
    """    

    def get_object(self, pk):
        try:
            return Color.objects.get(pk=pk)
        except Color.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        color = self.get_object(pk)
        serializer = ColorShareSerializer(color)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ColorTestList(APIView):
    """
    GET : personal color test 기록'들' 반환
    """

    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        colors = user.color_set.all()
        serializer = ColorListSerializer(colors, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


"""
[fashion matching test] : FashionTest(fashion matching test), FashionTestDetail(test 상세 결과), FashionShare(SNS 공유), FashionTestList(test 결과 리스트)
"""


class FashionTest(APIView):
    """
    POST : [fashion matching test] personal color와 옷 이미지를 분석해 적합도(rate) 반환
    """

    parser_classes = [FormParser, MultiPartParser]

    def post(self, request, format=None):
        data = {'color': request.data['color'], 'image': request.data['image']}
        if request.user.is_authenticated:
            data['user'] = request.user.id

        serializer = FashionTestSerializer(data=data)
        if serializer.is_valid():
            instance = serializer.save()
            return Response({
                'id': instance.id.hashid,
                'spring_rate': instance.spring_rate,
                'summer_rate': instance.summer_rate,
                'autumn_rate': instance.autumn_rate,
                'winter_rate': instance.winter_rate,
                'result': instance.result
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
        except Fashion.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        fashion = self.get_object(pk)
        if request.user.id == fashion.user_id:
            serializer = FashionDetailSerializer(fashion)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk, format=None):
        fashion = self.get_object(pk)
        if request.user.id == fashion.user_id:
            fashion.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)


class FashionShare(APIView):
    """
    GET : SNS 공유용 정보 반환 (테스트 결과)
    """

    def get_object(self, pk):
        try:
            return Fashion.objects.get(pk=pk)
        except Fashion.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        fashion = self.get_object(pk)
        serializer = FashionShareSerializer(fashion)
        return Response(serializer.data, status=status.HTTP_200_OK)


class FashionTestList(APIView):
    """
    GET : fashion matching test 기록'들' 반환
    """

    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        fashions = user.fashion_set.all()
        serializer = FashionListSerializer(fashions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
