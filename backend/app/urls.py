from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

from . import views


urlpatterns = [
    path('color/test/', views.ColorTest.as_view()),
    path('color/detail/<str:pk>/', views.ColorTestDetail.as_view()),
    path('color/share/<str:pk>/', views.ColorShare.as_view()),
    path('color/list/', views.ColorTestList.as_view()),
    path('fashion/test/', views.FashionTest.as_view()),
    path('fashion/detail/<str:pk>/', views.FashionTestDetail.as_view()),
    path('fashion/share/<str:pk>/', views.FashionShare.as_view()),
    path('fashion/list/', views.FashionTestList.as_view()),

    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('register/', views.CreateUser.as_view()),
    path('edit/password/', views.ChangePassword.as_view()),
    path('edit/nickname/', views.ChangeNickname.as_view()),
    path('quit/', views.DeleteUser.as_view())
]
