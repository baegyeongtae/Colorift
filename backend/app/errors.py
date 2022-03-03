from rest_framework.exceptions import APIException


class ExistingUsername(APIException):
    status_code = 409
    default_detail = 'username already exists'
    default_code = 'existing_username'


class IncorrectUserInfo(APIException):
    status_code = 400
    default_detail = 'username or nickname is incorrect'
    default_code = 'incorrect_user_info'
