from rest_framework import serializers
from .models import User, Color, Fashion


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email']


"""
ColorSerializer : personal color test 상세 데이터 (하나에 대한)
ColorInputSerializer : personal color test시 POST 요청으로 전달된 image 유효성 검사
ColorDigestSerializer : personal color test 요약 데이터 (전체 리스트)
"""


class ColorSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Color
        fields = ['id', 'color', 'image', 'date']


class ColorOutputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['color']


class ColorDigestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['id', 'color', 'date']


"""
FashionSerializer : personal color test 상세 데이터 (하나에 대한)
FashionInputSerializer : personal color test시 POST 요청으로 전달된 image 유효성 검사
FashionDigestSerializer : personal color test 요약 데이터 (전체 리스트)
"""


class FashionSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Fashion
        fields = ['color', 'image', 'date', 'total_match_rate', 'color_match_rate', 'brightness_match_rate', 'saturation_match_rate']


class FashionInputSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Color
        fields = ['color', 'image']


class FashionDigestSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Fashion
        fields = ['id', 'date', 'image']
