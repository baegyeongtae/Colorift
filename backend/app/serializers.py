from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import User, Color, Fashion


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], None, validated_data['password'])
        return user


"""
ColorSerializer : personal color test 상세 데이터 (하나에 대한)
ColorInputSerializer : personal color test시 POST 요청으로 전달된 image 유효성 검사
ColorDigestSerializer : personal color test 요약 데이터 (전체 리스트)
"""


class ColorSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), required=False)
    # 이렇게 쿼리셋을 넣으면 성능저하가 있을 것 같은데 그냥 user로그인 된 경우 아닌경우 serializer를 분리하는게 나을까 하는의문
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Color
        fields = ['id', 'user', 'color', 'image', 'date']


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
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), required=False)
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Fashion
        fields = ['id', 'user', 'color', 'image', 'date', 'color_match_rate', 'brightness_match_rate', 'saturation_match_rate']


class FashionDigestSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Fashion
        fields = ['id', 'date', 'image']
