# api docs

<br></br>
## 로그인, 탈퇴

이외 모듈 완료 후 논의하기로 하였다.

<br></br>
## 퍼스널 컬러 테스트
이미지 파일을 post 요청으로 백엔드에 전송하면 인공지능 모델을 통한 예측 결과를 리턴해준다.

* **URL**

  `/color/test`

* **Method:**

  `POST`
  
* **URL Params**

  `None`

* **Data Params**

  `image file (.jpg or .png)`

* **Success Response:**

  * **Code:** `201 Created` <br />
    **Content:** `{ "color" : "summer" }`
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`

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
    **Content:** `{ "colorTestList" : [ { "id" : 3, "color" : "winter", "date" : "2022-02-18" }, ... ] }`
 
* **Error Response:**

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`

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
    **Content:** `{ "colorTestDetail" : { "id" : 3, "color" : "winter", "date" : "2022-02-18", "imageURL" : "http://s3-hosted-image-url" } }`
 
* **Error Response:**

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`

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
    **Content:** `{ "success" : "record successfully deleted" }`
 
* **Error Response:**

  * **Code:** `404 Not Found / 400 Bad Request / 500 Internal Server Error ...` <br />
    **Content:** `{ "error" : "django built-in error message" }`

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
    **Content:** `{ "color" : "summer" }`
 
* **Error Response:**

  * **Code:** `400 Bad Request` <br />
    **Content:** `{ "error" : "django built-in error message" }`

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
    **Content:** `{ "fashionTestList" : [ { "id" : 3, "color" : "winter", "date" : "2022-02-18", "imageURL" : "http://s3-hosted-image-url" }, ... ] }`
 
* **Error Response:**

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`

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
    **Content:** `{ "fashionTestDetail" : { "id" : 3, "color" : "winter", "date" : "2022-02-18", "imageURL" : "http://s3-hosted-image-url" } }`
 
* **Error Response:**

  * **Code:** `404 Not Found` <br />
    **Content:** `{ "error" : "django built-in error message" }`

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
    **Content:** `{ "success" : "record successfully deleted" }`
 
* **Error Response:**

  * **Code:** `404 Not Found / 400 Bad Request / 500 Internal Server Error ...` <br />
    **Content:** `{ "error" : "django built-in error message" }`