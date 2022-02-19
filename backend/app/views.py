from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from app.models import User, Color, Fashion
from app.serializers import *
from datetime import date


class ColorTest(APIView):
    """
    POST : [personal color test] 얼굴 이미지 받아서 personal color 결과 반환
    """

    def post(self, request, format=None):
        serializers = ColorInputSerializer(data=request.data)
        if serializers.is_valid():
            user = User.objects.get(pk="example@gmail.com")  # 아직 로그인 로직이 없어서 테스트용으로 만든 user
            '''
            머신러닝 모델 거치고 결과를 반환, 로그인 유저라면 저장 아니라면 저장안함
            로그인 유저라면 사진과 색결과를 함께 저장해주어야 한다
            '''
            if True:  # 유저가 있는 경우
                color = {'user': user, 'image': serializers.validated_data['image'], 'color': 'SP', 'date': date.today()}
                _serializers = ColorSerializer(data=color)
                _serializers.save()
                return Response({'color': 'SP'}, status=status.HTTP_201_CREATED)
            else:
                return Response({'color': 'SP'}, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


class ColorTestDetail(APIView):
    """
    pk로 디비에서 personal color test 상세정보 꺼내오기, pk는 데이터베이스 Color table의 id
    GET : 이전 personal color test 기록 반환
    DELETE : personal color test 기록 삭제
    """

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

    def get(self, request, format=None):
        user = User.objects.get(pk="example@gmail.com")  # 아직 로그인 로직이 없어서 테스트용으로 만든 user
        colors = user.color_set.all()
        serializer = ColorDigestSerializer(colors, many=True)
        return Response(serializer.data)


class FashionTest(APIView):
    """
    POST : [fashion matching test] personal color와 옷 이미지를 분석해 적합도(rate) 반환
    """

    def post(self, request, format=None):
        serializers = FashionSerializer(data=request.data)
        if serializers.is_valid():
            '''
            머신러닝 모델 거치고 결과를 반환, 로그인 유저라면 저장 아니라면 저장안함
            로그인 유저라면 사진과 색결과를 함께 저장해주어야 한다
            '''
            serializers.save()
            return Response(serializers.data, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


class FashionTestDetail(APIView):
    """
    pk로 디비에서 fashion matching test 상세정보 꺼내오기, pk는 데이터베이스 Color table의 id
    GET : 이전 fashion matching test 기록 반환
    DELETE : fashion matching test 기록 삭제
    """

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

    def get(self, request, format=None):
        fashions = Fashion.objects.all()
        serializer = FashionDigestSerializer(fashions, many=True)
        return Response(serializer.data)
