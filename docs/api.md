# api docs

<br></br>
## 회원가입
아이디, 닉네임, 비밀번호를 입력하면 회원가입을 진행한다.
```
아이디 : 4글자 이상 / 영문 숫자 가능 / 한글 특수문자 공백 불가
닉네임 : 4글자 이상 / 한글 영문 숫자 가능 / 특수문자 공백 불가
비밀번호 : 8글자 이상 / 영문 숫자 특수문자 가능 / 한글 공백 불가
※ 특수문자 : ~!@#$%<>^&*
```

* **URL**

  `/register/`

* **Method:**

  `POST`
  
* **URL Params**

  `None`

* **Data Params**

  `{ "username" : "아이디", "nickname" : "닉네임", "password" : "패스워드" }`<br />

* **Success Response:**

  * **Code:** `201 Created` <br />
    **Content:** `None`<br />
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 로그인
아이디, 비밀번호를 입력하면 로그인을 진행한다.

* **URL**

  `/token/`

* **Method:**

  `POST`
  
* **URL Params**

  `None`

* **Data Params**

  `{ "username" : "아이디", "password" : "패스워드" }`<br />

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{
	"refresh":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0(-중략-)4ifQ.Y0_HK_GPdn5w83KbE4Tdr0BnzthV6nArVkRxPv-MYyo",
	"access":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0(-중략-)biJ9.OQ_1bb1b5qatht60ZQPQc2r7jTE0hZ8bYLu19M22S_Q",
	"nickname": "helloworld"
}`<br />
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `401 Unauthorized` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 회원탈퇴

* **URL**

  `/quit/`

* **Method:**

  `DELETE`
  
* **URL Params**

  `None`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `None`
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `401 Unauthorized` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 퍼스널 컬러 테스트
이미지 파일을 post 요청으로 백엔드에 전송하면 인공지능 모델을 통한 예측 결과를 리턴해준다.

* **URL**

  `/color/test/`

* **Method:**

  `POST`
  
* **URL Params**

  `None`

* **Data Params**

  `image file (.jpg or .png)`

* **Success Response:**

  * **Code:** `201 Created` <br />
    **Content:** `{ "color" : "summer" }`<br />
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 퍼스널 컬러 테스트 기록 리스트 조회
유저의 지난 퍼스널 컬러 테스트 기록들을 리턴해준다.

* **URL**

  `/color/test-list` or `/color/test-records`

* **Method:**

  `GET`
  
* **URL Params**

  `None`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{ "colorTestList" : [ { "id" : 3, "color" : "winter", "date" : "2022-02-18" }, ... ] }`<br />
 
* **Error Response:**

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 퍼스널 컬러 테스트 기록 상세 조회
하나의 퍼스널 컬러 테스트 기록에 대한 상세 조회를 요청하면, 해당 테스트의 상세 데이터를 전송해준다.

* **URL**

  `/color/test-detail/:id`

* **Method:**

  `GET`
  
* **URL Params**

  `id:[integer]`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{ "colorTestDetail" : { "id" : 3, "color" : "winter", "date" : "2022-02-18", "imageURL" : "http://s3-hosted-image-url" } }`<br />
 
* **Error Response:**

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 퍼스널 컬러 테스트 기록 삭제
하나의 퍼스널 컬러 테스트 기록에 대한 삭제를 요청하면, 해당 기록을 삭제해준다.

* **URL**

  `/color/test-detail/:id`

* **Method:**

  `DELETE`
  
* **URL Params**

  `id:[integer]`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{ "success" : "record successfully deleted" }`<br />
 
* **Error Response:**

  * **Code:** `404 Not Found / 400 Bad Request / 500 Internal Server Error ...` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 패션매칭 테스트
퍼스널 컬러와 이미지 파일을 post 요청으로 백엔드에 전송하면 인공지능 모델을 통한 예측 결과를 리턴해준다.

* **URL**

  `/fashion/test`

* **Method:**

  `POST`
  
* **URL Params**

  `None`

* **Data Params**

  `image file (.jpg or .png)`

* **Success Response:**

  * **Code:** `201 Created` <br />
    **Content:** `{ "color" : "summer" }`<br />
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 패션매칭 테스트 기록 리스트 조회
유저의 지난 패션매칭 테스트 기록들을 리턴해준다.

* **URL**

  `/fashion/test-list` or `/fashion/test-records`

* **Method:**

  `GET`
  
* **URL Params**

  `None`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{ "fashionTestList" : [ { "id" : 3, "date" : "2022-02-18", "imageURL" : "http://s3-hosted-image-url" }, ... ] }`<br />
 
* **Error Response:**

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 패션매칭 테스트 기록 상세 조회
하나의 패션매칭 테스트 기록에 대한 상세 조회를 요청하면, 해당 테스트의 상세 데이터를 전송해준다.

* **URL**

  `/fashion/test-detail/:id`

* **Method:**

  `GET`
  
* **URL Params**

  `id:[integer]`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{ "fashionTestDetail" : { "id" : 3, "color" : "winter", "colorMatchRate" : 82, "brightnessMatchRate" : 60, "saturationMatchRate" : 75, "totalMatchRate" : 67, "date" : "2022-02-18", "imageURL" : "http://s3-hosted-image-url" } }`<br />
 
* **Error Response:**

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 패션매칭 테스트 기록 삭제
하나의 패션매칭 테스트 기록에 대한 삭제를 요청하면, 해당 기록을 삭제해준다.

* **URL**

  `/fashion/test-detail/:id`

* **Method:**

  `DELETE`
  
* **URL Params**

  `id:[integer]`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{ "success" : "record successfully deleted" }`<br />
 
* **Error Response:**

  * **Code:** `404 Not Found / 400 Bad Request / 500 Internal Server Error ...` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />
