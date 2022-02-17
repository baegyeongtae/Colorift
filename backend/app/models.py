from django.db import models


class User(models.Model):
    email = models.CharField(max_length=50, primary_key=True)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.email


class Color(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    color = models.CharField(max_length=6)
    date = models.DateTimeField()

    def __str__(self):
        return self.color


class Fashion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    color = models.CharField(max_length=6)
    img_url = models.URLField()
    rate = models.FloatField()
    date = models.DateTimeField()
