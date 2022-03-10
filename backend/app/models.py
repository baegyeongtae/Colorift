from django.db import models

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from hashid_field import HashidAutoField


class UserManager(BaseUserManager):

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

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['nickname', 'password']

    def __str__(self):
        return self.nickname


class Color(models.Model):
    id = HashidAutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    image = models.ImageField(upload_to='face/')
    date = models.DateField()
    spring_rate = models.IntegerField()
    summer_rate = models.IntegerField()
    autumn_rate = models.IntegerField()
    winter_rate = models.IntegerField()


SPRING = 'SP'
SUMMER = 'SU'
AUTUMN = 'AU'
WINTER = 'WI'
SEASON_CHOICES = [
    (SPRING, 'spring'),
    (SUMMER, 'summer'),
    (AUTUMN, 'autumn'),
    (WINTER, 'winter')
]

GOOD = 'G'
SOSO = 'S'
BAD = 'B'
RESULT_CHOICES = [
    (GOOD, 'good'),
    (SOSO, 'soso'),
    (BAD, 'bad')
]


class Fashion(models.Model):
    id = HashidAutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    color = models.CharField(max_length=2, choices=SEASON_CHOICES, default=SPRING)
    image = models.ImageField(upload_to='fashion/')
    date = models.DateField()
    spring_rate = models.IntegerField()
    summer_rate = models.IntegerField()
    autumn_rate = models.IntegerField()
    winter_rate = models.IntegerField()
    result = models.CharField(max_length=1, choices=RESULT_CHOICES, default=GOOD)
