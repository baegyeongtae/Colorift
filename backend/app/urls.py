from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('color/test/', views.ColorTest.as_view()),
    path('color/detail/<int:pk>/', views.ColorTestDetail.as_view()),
    path('color/list/', views.ColorTestList.as_view()),
    path('fashion/test/', views.FashionTest.as_view()),
    path('fashion/detail/<int:pk>/', views.FashionTestDetail.as_view()),
    path('fashion/list/', views.FashionTestDetail.as_view()),

    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('register/', views.CreateUser.as_view()),
    path('quit/', views.DeleteUser.as_view())
]
