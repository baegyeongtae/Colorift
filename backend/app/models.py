from django.db import models


class User(models.Model):
    email = models.CharField(max_length=50, primary_key=True)
    password = models.CharField()


class Color(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    color = models.CharField(choices=['spring', 'summer', 'fall', 'winter'])
    image = models.ImageField()
    date = models.DateField()


class Fashion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    color = models.CharField(choices=['spring', 'summer', 'fall', 'winter'])
    image = models.ImageField()
    date = models.DateField()
    total_match_rate = models.IntegerField()
    color_match_rate = models.IntegerField()
    brightness_match_rate = models.IntegerField()
    saturation_match_rate = models.IntegerField()
