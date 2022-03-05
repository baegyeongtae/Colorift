from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class UserManager(BaseUserManager):
    # 일반 user 생성
    def create_user(self, username, nickname, password=None):
        if not username:
            raise ValueError('must have username(account)')  # 여기서 username nickname password 검증해줄필요 없을거같은데 지울까요?
        if not nickname:                                    # 쉘로 접근해서 직접 Usermodel 만드는거 아니면 쓸일이 없을거같아서요
            raise ValueError('must have user nickname')     # 그경우가 아니면 registeruserserailizer 에서 검증을 해주니까
        if not password:
            raise ValueError('must have user password')
        user = self.model(
            username=username,
            nickname=nickname
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    # 관리자 user 생성
    def create_superuser(self, username, nickname, password=None):
        user = self.create_user(
            username=username,
            nickname=nickname,
            password=password
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    username = models.CharField(default='', max_length=100, null=False, blank=False, unique=True)
    nickname = models.CharField(default='', max_length=100, null=False, blank=False)
    password = models.CharField(default='', max_length=100, null=False, blank=False)

    # User 모델의 필수 field
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    # 헬퍼 클래스 사용
    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['nickname', 'password']

    def __str__(self):
        return self.nickname


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
