from rest_framework import serializers
from .models import User, Color, Fashion, ColorInput, FashionInput


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email']


"""
퍼스널 컬러 테스트를 한 결과를 저장한 상세데이터 serializer
"""


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'


"""
'color/list' 기록들을 전송하기 위한 요약결과를 만들어주는 serializer
"""


class ColorDigestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['id', 'color', 'date']


"""
패션매칭 테스트를 한 결과를 저장한 상세데이터 serializer
"""


class FashionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fashion
        fields = '__all__'


"""
'fashion/list' 기록들을 전송하기 위한 요약결과를 만들어주는 serializer
"""


class FashionDigestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fashion
        fields = ['id', '', '']
