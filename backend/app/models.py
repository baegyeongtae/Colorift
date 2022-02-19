from django.db import models


SEASON_CHOICES = [('SP', 'spring'), ('SU', 'summer'), ('FA', 'fall'), ('WI', 'winter')]


class User(models.Model):
    email = models.CharField(max_length=50, primary_key=True)
    password = models.CharField(max_length=255)


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
    total_match_rate = models.IntegerField()
    color_match_rate = models.IntegerField()
    brightness_match_rate = models.IntegerField()
    saturation_match_rate = models.IntegerField()
