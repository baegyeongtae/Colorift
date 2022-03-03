from rest_framework import serializers
from .models import User, Color, Fashion
from datetime import date
import numpy as np
import cv2


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


"""
ColorTestSerializer : personal color test input 검증 및 db 저장
ColorDetailSerializer : personal color test 상세 데이터
ColorListSerializer : personal color test 요약 데이터 (전체 리스트)
"""


class ColorTestSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Color
        fields = ['user', 'image']

    def ai_model(self, file):
        # read 하는건 이전과 동일한데 지금은 문제가 안생기는 이유는 validated_data에 복사+저장되기 때문인가..?
        return "SP"

    def create(self, validated_data):
        color = self.ai_model(validated_data['image'])
        return Color.objects.create(color=color, date=date.today(), **validated_data)


class ColorDetailSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Color
        fields = ['id', 'user', 'color', 'image', 'date']


class ColorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['id', 'color', 'date']


"""
FashionTestSerializer : personal color test input 검증 및 db 저장
FashionDetailSerializer : personal color test 상세 데이터
FashionListSerializer : personal color test 요약 데이터 (전체 리스트)
"""


class FashionTestSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Fashion
        fields = ['user', 'color', 'image']

    def ai_model(self, color, file):  # 아직 ai model 연결되지 않음
        return {'color_match_rate': 50, 'brightness_match_rate': 50, 'saturation_match_rate': 50}

    def create(self, validated_data):
        fashion = self.ai_model(
            validated_data['color'], validated_data['image'])
        return Fashion.objects.create(**validated_data, date=date.today(), **fashion)


class FashionDetailSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Fashion
        fields = ['id', 'user', 'color', 'image', 'date', 'color_match_rate',
                  'brightness_match_rate', 'saturation_match_rate']


class FashionListSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Fashion
        fields = ['id', 'date', 'image']
