from django.urls import path
from . import views

urlpatterns = [
    path('color/test/', views.ColorTest.as_view()),
    path('color/detail/<int:pk>/', views.ColorTestDetail.as_view()),
    path('color/list/', views.ColorTestDetail.as_view()),
    path('fashion/test/', views.ColorTest.as_view()),
    path('fashion/detail/<int:pk>/', views.ColorTestDetail.as_view()),
    path('fashion/list/', views.ColorTestDetail.as_view()),
]
