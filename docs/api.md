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
## 비밀번호 변경
아이디와 닉네임을 맞추면 비밀번호를 변경해준다.

* **URL**

  `/edit/password/`

* **Method:**

  `PATCH`
  
* **URL Params**

  `None`

* **Data Params**

  `{ "username" : "아이디", "nickname" : "닉네임", "password" : "변경할 패스워드" }`<br />

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `None`<br />
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 닉네임 변경
로그인 유저는 닉네임을 변경해준다. <br />
Bearer 필요함

* **URL**

  `/edit/nickname/`

* **Method:**

  `PATCH`
  
* **URL Params**

  `None`

* **Data Params**

  `{ "nickname" : "변경할 닉네임" }`<br />

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `None`<br />
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />


<br></br>
## 회원탈퇴
탈퇴 요청이 오면 데이터베이스에서 제거한다.<br />
Bearer 필요함

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
## 토큰 재발급
refresh 토큰을 보내주면 access 토큰과 refresh 토큰을 재발급 해준다.

* **URL**

  `/token/refresh/`

* **Method:**

  `POST`
  
* **URL Params**

  `None`

* **Data Params**

  `{ "refresh" : "리프레시 토큰" }`<br />

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{
	"access":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0(-중략-)biJ9.0ttdBrEwL1jxMF1dy_8Le4yticaHj8QlG_ScQgci6oE",
	"refresh":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0(-중략-)4ifQ.V_ma04WqsMrUXt61ljL587EUwVkj7-MtZNUilSy8hLw"
}`<br />
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `401 Unauthorized` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 토큰 유효성 체크
access 또는 refresh 토큰을 보내주면 해당 토큰이 유효한지 확인해준다.

* **URL**

  `/token/verify/`

* **Method:**

  `POST`
  
* **URL Params**

  `None`

* **Data Params**

  `{ "token" : "access 토큰 또는 refresh 토큰" }`<br />

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{}`<br />
 
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

  * **Code:** `200 OK` <br />
    **Content:** `{
	"id" : "OwLxW8D",
	"spring_rate" : 40,
	"summer_rate" : 30,
	"autumn_rate" : 20,
	"winter_rate" : 10
}`<br />
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 퍼스널 컬러 테스트 기록 리스트 조회
유저의 지난 퍼스널 컬러 테스트 기록들을 리턴해준다. <br />
Bearer 필요함

* **URL**

  `/color/list/`

* **Method:**

  `GET`
  
* **URL Params**

  `None`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `[
    {
        "id": "AJEM7LK",
        "date": "2022-02-21",
        "spring_rate" : 40,
				"summer_rate" : 30,
				"autumn_rate" : 20,
				"winter_rate" : 10
    },
    {
        "id": "AJEM7LK",
        "date": "2022-02-22",
        "spring_rate" : 40,
				"summer_rate" : 30,
				"autumn_rate" : 20,
				"winter_rate" : 10
    },
    ...
]`<br />
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `401 Unauthorized` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 퍼스널 컬러 테스트 기록 상세 조회
하나의 퍼스널 컬러 테스트 기록에 대한 상세 조회를 요청하면, 해당 테스트의 상세 데이터를 전송해준다. <br />
Bearer 필요함

* **URL**

  `/color/detail/:id/`

* **Method:**

  `GET`
  
* **URL Params**

  `:id 는 Color table의 아이디로 테스트결과에 대한 아이디이다. 유저 아이디가 아니다. /app/color/list/ url 에서 리턴되는 id를 가지고 있다가 그걸 통해서 접근하는 방식으로 구현하면 된다.`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{
	"id":"N8VNa8z",
	"user":7,
	"spring_rate" : 40,
	"summer_rate" : 30,
	"autumn_rate" : 20,
	"winter_rate" : 10,
	"image":"https://colorfit.s3.ap-northeast-2.amazonaws.com/face/onebin.jpg",
	"date":"2022-02-22"
}`<br />
 
* **Error Response:**
  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `401 Unauthorized` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 퍼스널 컬러 테스트 기록 삭제
하나의 퍼스널 컬러 테스트 기록에 대한 삭제를 요청하면, 해당 기록을 삭제해준다. <br />
Bearer 필요함

* **URL**

  `/color/detail/:id/`

* **Method:**

  `DELETE`
  
* **URL Params**

  `:id 는 Color table의 아이디로 테스트결과에 대한 아이디이다. 유저 아이디가 아니다. /app/color/list/ url 에서 리턴되는 id를 가지고 있다가 그걸 통해서 접근하는 방식으로 구현하면 된다.`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `None`<br />
 
* **Error Response:**

  * **Code:** `401 Unauthorized` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `403 Forbidden` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 패션매칭 테스트
퍼스널 컬러와 이미지 파일을 post 요청으로 백엔드에 전송하면 인공지능 모델을 통한 예측 결과를 리턴해준다.

* **URL**

  `/fashion/test/`

* **Method:**

  `POST`
  
* **URL Params**

  `None`

* **Data Params**

  `{ "color" : "(‘SP’, ’SU’, ’AU’, ’WI’) 중 하나", "image" : "(.jpg or .png)" }`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{
	"id" : "OwLxW8D",
	"spring_rate" : 40,
	"summer_rate" : 30,
	"autumn_rate" : 20,
	"winter_rate" : 10,
	"result" : 'G' 또는 'B' 또는 'S'
}`<br />
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 패션매칭 테스트 기록 리스트 조회
유저의 지난 패션매칭 테스트 기록들을 리턴해준다. <br />
Bearer 필요함

* **URL**

  `/fashion/list/`

* **Method:**

  `GET`
  
* **URL Params**

  `None`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `[
	{
		"id":"AJEM7LK",
		"date":"2022-02-24",
		"image":"https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/gucci.jpg"
	},
	{
		"id":"AJEM7LK",
		"date":"2022-02-24",
		"image":"https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/moncler.jpg"
	},
  ...
]`<br />
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `401 Unauthorized` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 패션매칭 테스트 기록 상세 조회
하나의 패션매칭 테스트 기록에 대한 상세 조회를 요청하면, 해당 테스트의 상세 데이터를 전송해준다. <br />
Bearer 필요함

* **URL**

  `/fashion/detail/:id/`

* **Method:**

  `GET`
  
* **URL Params**

  `:id 는 Fashion table의 아이디로 테스트결과에 대한 아이디이다. 유저 아이디가 아니다. /app/fashion/list/ url 에서 리턴되는 id를 가지고 있다가 그걸 통해서 접근하는 방식으로 구현하면 된다.`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{
	"id":"AJEM7LK",
	"user":1,
	"color":"SP",
	"image":"https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/northface_Qdo5niU.jpg",
	"date":"2022-02-24",
  "spring_rate" : 40,
	"summer_rate" : 30,
	"autumn_rate" : 20,
	"winter_rate" : 10,
	"result" : G,
}`<br />
 
* **Error Response:**

  * **Code:** `401 Unauthorized` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `403 Forbidden` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 패션매칭 테스트 기록 삭제
하나의 패션매칭 테스트 기록에 대한 삭제를 요청하면, 해당 기록을 삭제해준다. <br />
Bearer 필요함

* **URL**

  `/fashion/detail/:id/`

* **Method:**

  `DELETE`
  
* **URL Params**

  `:id 는 Fashion table의 아이디로 테스트결과에 대한 아이디이다. 유저 아이디가 아니다. /app/color/list/ url 에서 리턴되는 id를 가지고 있다가 그걸 통해서 접근하는 방식으로 구현하면 된다.`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `None`<br />
 
* **Error Response:**

  * **Code:** `401 Unauthorized` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `403 Forbidden` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 퍼스널컬러 공유 페이지 조회
공유 페이지로 들어오면 관련 정보를 보여준다.

* **URL**

  `/color/share/:id/`

* **Method:**

  `GET`
  
* **URL Params**

  `:id 는 Color table의 아이디로 테스트결과에 대한 아이디이다. 유저 아이디가 아니다.`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{
	"id":"N8VNa8z",
	"spring_rate" : 40,
	"summer_rate" : 30,
	"autumn_rate" : 20,
	"winter_rate" : 10,
	"image":"https://colorfit.s3.ap-northeast-2.amazonaws.com/face/onebin.jpg",
}`<br />
 
* **Error Response:**

  * **Code:** `401 Unauthorized` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `403 Forbidden` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

<br></br>
## 패션매칭 공유 페이지 조회
공유 페이지로 들어오면 관련 정보를 보여준다.

* **URL**

  `/fashion/share/:id/`

* **Method:**

  `GET`
  
* **URL Params**

  `:id 는 Fashion table의 아이디로 테스트결과에 대한 아이디이다.`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** `200 OK` <br />
    **Content:** `{
	"color":"SP",
	"image":"https://colorfit.s3.ap-northeast-2.amazonaws.com/fashion/northface_Qdo5niU.jpg",
  "spring_rate" : 40,
	"summer_rate" : 30,
	"autumn_rate" : 20,
	"winter_rate" : 10
	"result" : 'G' 또는 'B' 또는 'S'
}`<br />
 
* **Error Response:**

  * **Code:** `401 Unauthorized` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `403 Forbidden` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />

  * **Code:** `405 Method Not Allowed` <br />
    **Content:** `{ "error" : "django built-in error message" }`<br />
