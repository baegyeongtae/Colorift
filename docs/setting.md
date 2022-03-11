원글 노션 링크 : https://www.notion.so/elice/1b4f96d91d324349a2d16a7acf659da0

<br></br>

```
💡 이 문서는 linux(ubuntu, window WSL2)환경을 기준으로 작성되었습니다. 호환이 되지 않는 부분은 구글링하거나 질문해주세요!

💡 명령어를 어떤 디렉토리에서 실행해야 하는지에 주의해주세요!
```
<br></br>

### 1. gitlab repository에서 project boilerplate(기본 뼈대) clone하기

```bash
$ git clone https://kdt-gitlab.elice.io/ai_track/class_03/ai_project/team13/colorfit.git
```

위 명령어를 `projects`라는 디렉토리에서 수행했다고 가정하겠습니다. 우리 팀 repository 이름이 `colorfit`이기 때문에 결과적으로 나의 local 환경에 clone된 폴더 구조는 아래와 같게 됩니다.

```bash
-projects
	|-colorfit
		|-ai/
		|-backend/
		|-frontend/
		|-.gitignore
		|-README.md
```

<br></br>

### 2. frontend 설정 1단계 - node 설치하기

이 문서의 기준 `node` 버전은 `v16.13.1` 입니다.

### 3. frontend 설정 2단계 - `node_modules` 다운로드하기

```bash
colorfit/frontend$ npm install
```

CRA(create-react-app)를 통해서 boilerplate를 만들었지만 몇가지 수정한 점이 있습니다.

1. default로 생성되는 `.gitignore`를 frontend바깥으로 빼서 최상단에 위치 시켰습니다.
2. 그리고 `.gitignore`의 위치 변경으로 인해 그 내용이 조금 바뀌었습니다. 예를 들어서, 원래는 CRA를 통해서 자동으로 생성되는 `node_modules`가 `.gitignore`와 같은 디렉토리 상에 존재하기 때문에 `.gitignore` 안에 `/node_modules` 라고 되어있지만, `node_modules/` 로 수정했습니다.

<br></br>

`.gitignore`관련해서 더 궁금하신 점은 아래 링크를 참고!

1. ****[.gitignore 파일 작성법 기초가이드](https://bio-info.tistory.com/23)****
2. [https://git-scm.com/docs/gitignore](https://git-scm.com/docs/gitignore)

<br></br>

### 4. backend 설정 1단계 - `python` 설치

이 문서의 기준버전은 `v3.8.10` 입니다.


### 5. backend 설정 2단계 - 가상환경 구성, 활성화

```bash
colorfit/backend$ python3 -m venv env      # env 라는 이름의 가상환경 생성
colorfit/backend$ source env/bin/activate  # env 라는 이름의 가상환경 활성화
```

두번째 가상환경 활성화 부분은

window는 (참고링크 : [https://hleecaster.com/python-venv/](https://hleecaster.com/python-venv/))

> 프로젝트 폴더 안에서 `**가상환경이름\Scripts\activate.bat**`이라고 쳐주면 가상환경이 활성화
> 

mac은 (참고링크 : [https://curryyou.tistory.com/140](https://curryyou.tistory.com/140))

> env/bin 디렉토리에서 **`source ./activate`** 이라고 쳐주면 가상환경이 활성화
> 

<br></br>
```
💡 저도 현재 window나 mac을 사용하지 않기 때문에 운영체제 차이로 인해 잘 안되는 부분이 있다면 말씀해주세요!!
```

<br></br>

### 6. backend 설정 3단계 - 필요 패키지 설치 (가상환경이 활성화된 채로!)

```bash
colorfit/backend$ pip install django
colorfit/backend$ pip install djangorestframework
```

<br></br>

### 마무리! 설정이 잘 됐는지 확인하기

<br></br>

```bash
colorfit/frontend$ npm start
```

리액트 로고 들어간 화면이 보이면 frontend 설정완료!

<br></br>

```bash
colorfit/backend$ python manage.py runserver
```

로켓이 그려진 장고 화면이 보이면 backend 설정완료!

<br></br>
```
💡 `ai/.gitkeep`은? ⇒ 빈 폴더를 깃허브에 업로드하기 위해서 넣어두는 더미파일입니다.
```

<br></br>

# 서버 세팅 추가 (2022 02 24)

### 1. backend 폴더 하위에 db.sqlite3이라는 빈 파일 생성
만약 있다면 생성할 필요 없다

### 2. backend/app/migrations 안에 0001_initial.py 가 있다면 삭제
없다면 python manage.py makemigrations

### 3. python 가상환경을 만들고 (무조건 이름을 env로 만들어야 함)

### 4. 가상환경을 활성화 하고 (os별 명령어 차이 확인 필요)
의존성 패키지들을 설치
- boto3==1.21.2
- django-cors-headers==3.11.0
- django-storages==1.12.3
- djangorestframework==3.13.1
- djangorestframework-simplejwt==5.0.0
- Django==4.0.2
- Pillow==9.0.1

만 일단 설치해도 서버 구동 가능


### 5. aws 관련파일인 conf.py는 backend/config안에 생성

### 6. python manage.py runserver하면 서버 구동

### 모든 과정은 backend 폴더 위치에서 진행. (가상환경은 colorfit 하단 (backend의 위쪽)에서 해도되지만 backend에서 하길 권장)

