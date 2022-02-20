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


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # add custom claims
        token['username'] = user.username

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


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
            color_result = self.color_ai_model()  # 머신 러닝 모델과 연결 필요

            # 로그인 유저의 경우 추가로 user_id도 저장해줘야 한다.
            serializer = ColorSerializer(data={'image': file_obj, 'color': color_result, 'date': date.today()})
            if serializer.is_valid():
                serializer.save()

            return Response({'color': color_result}, status=status.HTTP_201_CREATED)

        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


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
        serializer = ColorSerializer(color)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        color = self.get_object(pk)
        color.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


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


class FashionTest(APIView):
    """
    POST : [fashion matching test] personal color와 옷 이미지를 분석해 적합도(rate) 반환
    """

    parser_classes = [FormParser, MultiPartParser]

    def fashion_ai_model(self):  # 머신러닝 모델과 연결 필요
        return 'SP'

    def post(self, request, format=None):
        file_obj = request.data['image']
        if file_obj:
            fashion_result = self.fashion_ai_model()  # 머신 러닝 모델과 연결 필요

            # 로그인 유저의 경우 추가로 user_id도 저장해줘야 한다.
            serializer = FashionSerializer(data={'image': file_obj, 'color': fashion_result, 'date': date.today()})
            if serializer.is_valid():
                serializer.save()

            return Response({'fashion': fashion_result}, status=status.HTTP_201_CREATED)

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


class ColorTestList(APIView):
    """
    GET : fashion matching test 기록'들' 반환
    """

    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        fashions = user.fashion_set.all()
        serializer = FashionDigestSerializer(fashions, many=True)
        return Response(serializer.data)
