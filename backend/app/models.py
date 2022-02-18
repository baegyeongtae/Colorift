from django.db import models


class User(models.Model):
    email = models.CharField(max_length=50, primary_key=True)
    password = models.CharField()


class Color(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    color = models.CharField(max_length=6)
    image = models.ImageField()
    date = models.DateField()


class Fashion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    color = models.CharField(max_length=6)
    image = models.ImageField()
    rate = models.FloatField()
    date = models.DateField()
