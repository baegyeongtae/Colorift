from django.db import models
from django.contrib.auth.models import User


SEASON_CHOICES = [('SP', 'spring'), ('SU', 'summer'), ('FA', 'fall'), ('WI', 'winter')]


class Color(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    color = models.CharField(max_length=2, choices=SEASON_CHOICES, default='SP')
    image = models.ImageField(upload_to='face/')
    date = models.DateField()


class Fashion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    color = models.CharField(max_length=2, choices=SEASON_CHOICES, default='SP')
    image = models.ImageField(upload_to='fashion/')
    date = models.DateField()
    color_match_rate = models.IntegerField()
    brightness_match_rate = models.IntegerField()
    saturation_match_rate = models.IntegerField()
