# 설치 라이브러리

### 주요

###### django, django rest framework
- `Django==4.0.2`
- `djangorestframework==3.13.1`

###### django, django rest framework
- `django-cors-headers==3.11.0` => cors 에러 제거
- `djangorestframework-simplejwt==5.0.0` => jwt기반 인증 구현

###### aws s3와 연결
- `boto3==1.21.2` => python과 aws s3연결
- `django-storages==1.12.3` => aws s3 와 연결을 위한 django library
- `Pillow==9.0.1` => imageField 사용 시 필요

### 전체
- `asgiref==3.5.0`
- `backports.zoneinfo==0.2.1`
- `boto3==1.21.2`
- `botocore==1.24.2`
- `Django==4.0.2`
- `django-cors-headers==3.11.0`
- `django-filter==21.1`
- `django-storages==1.12.3`
- `djangorestframework==3.13.1`
- `djangorestframework-simplejwt==5.0.0`
- `importlib-metadata==4.11.1`
- `jmespath==0.10.0`
- `Markdown==3.3.6`
- `Pillow==9.0.1`
- `PyJWT==2.3.0`
- `python-dateutil==2.8.2`
- `pytz==2021.3`
- `s3transfer==0.5.1`
- `six==1.16.0`
- `sqlparse==0.4.2`
- `urllib3==1.26.8`
- `zipp==3.7.0`


# convention
- 여러 줄 주석은 ''' 보단 """ 이용
- class base view


# 구현 참고
- user model은 django.contrib.auth.models 의 User 이용 => admin과 같이 관리됨
- password 는 pbdk2 hasher
