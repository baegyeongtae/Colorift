from django.contrib import admin

# Register your models here.
from .models import Color, Fashion

admin.site.register(Color)
admin.site.register(Fashion)
