from itsdangerous import Serializer
from rest_framework import status
from rest_framework.views import api_view
from rest_framework.response import Response
from app.models import User, Color, Fashion
from app.serializers import UserSerializer, ColorSerializer, FashionSerializer, ColorInputSerializer, FashionInputSerializer


"""
POST : 얼굴 이미지 받아서 퍼스널 컬러 결과 반환
"""
@api_view(['POST'])
def color_test(request):
    serializers = ColorInputSerializer(data=request.data)
    if serializers.is_valid():
        '''
        머신러닝 모델 거치고 결과를 반환, 로그인 유저라면 저장 아니라면 저장안함
        로그인 유저라면 사진과 색결과를 함께 저장해주어야 한다
        '''
        serializers.save()
        return Response(serializers.data, status=status.HTTP_201_CREATED)
    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


"""
GET : 지난 퍼스널 컬러 기록 상세보기
DELETE : 해당 퍼스널 컬러 기록 삭제
"""
@api_view(['GET', 'DELETE'])
def color_detail(request):
    pass


"""
GET : 이전 퍼스널 컬러 테스트 기록들 반환
"""
@api_view(['GET'])
def color_records(request):
    colors = Color.objects.all()
    serializer = ColorSerializer(colors, many=True)
    return Response(serializer.data)


"""
POST : 퍼스널 컬러와 옷 사진을 받아서 적합도 반환
"""
@api_view(['POST'])
def fashion_test(request):
    serializers = FashionInputSerializer(data=request.data)
    if serializers.is_valid():
        # 로그인 유저라면 저장, 아니라면 저장안함
        serializers.save()
        return Response(serializers.data, status=status.HTTP_201_CREATED)
    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
    '''
    머신러닝 모델 거쳐서 결과 반환
    '''


"""
GET : 단일 패션 매칭 결과 상세보기
DELETE : 단일 패션 매칭 결과 삭제
"""
@api_view(['GET', 'DELETE'])
def fashion_detail(request, pk):
    try:
        color = Color.objects.get(pk=pk)
    except Color.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ColorSerializer(color)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        color.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


"""
GET : 패션매칭 테스트 결과 기록들 반환
"""
@api_view(['GET'])
def fashion_records(request):
    fashions = Fashion.objects.all()
    serializer = FashionSerializer(fashions, many=True)
    return Response(serializer.data)

    
