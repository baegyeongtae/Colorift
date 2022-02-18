from rest_framework import serializers
from .models import User, Color, Fashion, ColorInput, FashionInput


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email']


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['id', 'color', 'date']


class FashionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fashion
        fields = ['id', 'color', 'img_url', 'rate', 'date']


class ColorInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = ColorInput
        fields = '__all__'


class FashionInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = FashionInput
        fields = '__all__'
