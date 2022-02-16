# 프론트엔드 개발문서

### 공통 라이브러리

-"npm": "^8.5.0",
-"react": "^17.0.2",
-"react-dom": "^17.0.2",
-"react-router-dom": "^6.2.1",
-"recoil": "^0.6.1",
-"styled-components": "^5.3.3",

-"@emotion/react": "^11.7.1",
-"@emotion/styled": "^11.6.0",
-"@material-ui/core": "^4.12.3",
-"@material-ui/icons": "^4.11.2",
-"@material-ui/styles": "^4.11.4",
-"@mui/icons-material": "^5.4.2",
-"@mui/material": "^5.4.2",

### 임미선

### 배경태

### 코딩 컨벤션

Prettier : 전반적인 코드 스타일 포맷팅

ESLint : 문법적 오류 체크

- 변수
    - 카멜 케이스 사용
    - 줄임말 금지 (cur ⇒ current)
    - className 이름 : 스네이크 표기법 (ex. background_color)
    - 이벤트 핸들러 : handle로 시작하는 카멜 케이스
- 폴더
    - 소문자 시작
    - 하이픈 사용
- 파일
    - 카멜 케이스 사용
    - 하이픈 사용
    - 컴포넌트 파일은 대문자 시작
- 컴포넌트
    - 스타일 컴포넌트 이름 : 끝에 태그명이 붙도록 ⇒ xxxDiv, xxxP
    - 스타일 컴포넌트는 export 구문 아랫단으로!!