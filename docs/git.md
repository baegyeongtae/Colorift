# Git을 이용한 협업

### commit convention
- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor : 코드 리팩토링
- test : 테스트 코드, 리팩토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정

### 현재 브랜치를 확인하는 방법

`git branch`

### 현재 브랜치에서 다른 브랜치로 변경하는 방법

`git checkout mybranch` ⇒ `mybranch`라는 브랜치로 이동

### 새로운 브랜치를 생성하는 방법

`git branch mybranch` ⇒ `mybranch`라는 새로운 브랜치가 생성됨

`git checkout -b mybranch` ⇒ `mybranch`라는 브랜치를 생성하고 `mybranch`로 이동

# Git을 통한 작업 프로세스

> s3이미지 접근 불가 관계로 스크린샷은 없애고 내용을 최대한 간략하게 수정한다 (2022-02-22)

### 1. 이슈 생성

1. 이슈 이름과 간단한 내용 기입. 이슈 이름은 task내용으로 구성

2. 본인으로 assignee설정

3. 할 일 이므로 todo label을 선택, 파트에 따라서 본인 파트의 label (e.g. backend)를 따로 선택해서 추가

### 2. 원격 sprint branch와 싱크 맞추기 => branch 생성하고 작업 => push

```
$ git remote update
$ git checkout -t {remote branch name}  # 앞에 origin/을 넣어서 origin/sprint-01 이런식으로 remote branch name을 적는다
```

branch생성 ~ 작업push 과정설명

1. `feature/{이슈번호}-{브랜치이름 (task 제목)}` 이라는 브랜치 생성. 예를들어서 위에서 `백엔드 개발문서 생성`이라는 이슈를 생성했고 그 이슈넘버가 12번이라고 하면, `feature/12-backend-docs` 라는 이름으로 브랜치를 생성한다 (브랜치 이름 부분은 -(하이픈)으로 구분). 밑에서도 이 예시를 사용해 설명하겠다.

2. 작업을 한다.

3. `git add .` 을 통해서 모든 변경사항 스테이징 (`.gitignore`에 포함된 파일이나 디렉토리는 제외됨). 

4. `git commit -m 커밋메시지` 를 통해서 스테이징된 사항들을 `commit`한다.

5. `git push origin feature/12-backend-docs` 를 통해서 현재 로컬의 `feature/12-backend-docs`브랜치의 내용을 원격 레포지토리 `feature/12-backend-docs` 브랜치로 `push`한다.

### 3. merge request(MR)

1. MR 을 생성하고 target브랜치를 `sprint-01`로 설정한다. (default는 `master`)

2. reviewer로 팀원을 등록하고 만든다.

3. 코드리뷰를 받고 `sprint-01`에 머지한다. (권장)

4. 만약에 그 브랜치에서 구현하려고 한 기능이 끝났다면 (대부분 경우 완료후 MR을 날리겠지만) 머지 후 브랜치 삭제 옵션을 체크해주고 MR생성을 해주면 된다.

5. 이제 다른 팀원들은 `sprint-01`을 `git pull`해서 원격 레포지토리와 본인 로컬 환경의 싱크를 맞추면 된다.

### 마무리! 칸반보드에서 이슈관리

`todo`: 작업중
`done`: 작업완료, MR날리고 대기중
`closed`: 작업완료, merge완료

로 구분하며, 드래그 앤 드롭 방식으로 편리하게 이동이 가능.

## 기타

1. `release` 브랜치는 `master`에 가기 전 모든 기능이 잘 작동하는지 확인하는 브랜치다.

2. `sprint-xx` 는 `release`에서 생성한다.