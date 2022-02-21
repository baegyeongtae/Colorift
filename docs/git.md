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

### 1. 이슈 생성

![이슈생성 버튼](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c66e9d1e-1de2-4cd5-abca-ebbe566c6c89/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220216T152723Z&X-Amz-Expires=86400&X-Amz-Signature=32ce0c0ad5ab25ffc0e29d2ff2458672d25b99014e7755cf44d00811c706490d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

![이슈생성 제목](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b85da85c-d281-4889-9c68-8db51a87bae1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220216T153142Z&X-Amz-Expires=86400&X-Amz-Signature=918ff0e65f2d256055c59e971642bb9d0c27421c8f3f81fc957aa9b42b448ed5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

이슈 이름과 간단한 내용 기입 이슈 이름은 task내용으로 구성

![assignee 설정](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0527bb86-9f03-40c6-a957-392cef5bfd56/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220216T153214Z&X-Amz-Expires=86400&X-Amz-Signature=98615efa36aa42e71c9ef4f02d84aff2a434ecb82ae91cb4efcb15945a889adb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

assignee설정 (그 업무를 할 사람, 결국 본인)

![label 설정](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/68870d8c-e423-441f-a022-4607efb24fef/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220216T153253Z&X-Amz-Expires=86400&X-Amz-Signature=1c833fbb16d5a35c510b666cfe75f7b4193e487a467a89fc3be88d8a1925ca03&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

할 일 이므로 todo label을 선택, backend 파트이므로 backend label을 선택

![이슈 만들기](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/790e900b-abfa-4529-ab56-36d3a613a7b8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220216T153333Z&X-Amz-Expires=86400&X-Amz-Signature=ae8a0050709136738228f6d453895d1b5500d616e144b2c4ed1568b19a6374ef&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

create issue버튼을 눌러 이슈 생성

![생성완료 화면](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/94eec4dc-4e17-45fc-85cf-155eac091b9c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220216T153411Z&X-Amz-Expires=86400&X-Amz-Signature=2aede8cbc411b287311422cf1408cca8185c68cd694ee75ddff691540b2cf5b6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

생성완료 화면

### 2. 원격 sprint branch와 싱크 맞추기 => branch 생성하고 작업 => push

```
$ git remote update
$ git checkout -t {remote branch name}
```

branch생성 ~ 작업push 과정설명

1. `dev/{팀원명}` 이라는 브랜치 생성
2. `git add .` 을 통해서 모든 변경사항 스테이징 (`.gitignore`에 포함된 파일이나 디렉토리는 제외됨). 

```
💡 `git add .` vs `git add *`

`git add .` has no special meaning in your shell, and thus Git adds the entire directory recursively, which is almost the same, but including files whose names begin with a dot.

`git add *` means add all files in the current directory, except for files whose name begin with a dot. This is your shell functionality and Git only ever receives a list of files.
```

 `git add .`을 쓰면 된다.

1. `git commit -m 커밋메시지` 를 통해서 스테이징된 사항들을 `commit`한다.
2. `git push origin dev/{팀원명}` 를 통해서 현재 로컬의 `dev/{팀원명}`브랜치의 내용을 원격 레포지토리 `dev/{팀원명}` 브랜치로 `push`한다.

### 3. merge request(MR)

![MR 만드는 버튼](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/55c15f45-c576-474f-a7a4-72f7c76f3c08/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220216T154647Z&X-Amz-Expires=86400&X-Amz-Signature=fb0a1ae511445951dc904849f715955b99cb271ba7ea01ee5da41a3a476a1752&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

![MR 제목](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/71b0d643-1f66-41b5-aaf8-2d7f1bf0bf62/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220216T154911Z&X-Amz-Expires=86400&X-Amz-Signature=954d20efb6fa75e93a4c49b567300a093ea87998d31ff534a6ff46bc6f0d90fc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

왼쪽위를 보면 `dev/{팀원명}`을 `master`로 `merge`한다고 나와있다. 디폴트로 그렇게 되지만 우리는 `sprint00`에 `merge`해야하므로 그 바로 옆의 `Change branches`를 눌러서 바꿔줘야한다.

![target branch 변경](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9ceb795d-b32f-4a8c-81c6-58f71019806b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220216T154941Z&X-Amz-Expires=86400&X-Amz-Signature=ea1541a7fb0e8855d731b43640863ab40a832bdf96c54236ee2e532d28bb169e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

들어가서 오른쪽 `target branch`를 `sprint`브랜치로 변경하고 좌하단 버튼을 눌러 계속 진행하면 된다.

![마지막](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b126785c-6094-43fd-b374-568881526f54/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220216T155022Z&X-Amz-Expires=86400&X-Amz-Signature=1b1f663dfb94bd830b12c5357279980a1ef0264d28f6225ec73a6e0a5842cffb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

`sprint00`으로 `merge target branch`가 변경된 것을 볼 수 있다. 나머지 `assignee`나 `label`은 이슈생성에서도 설명했으니 생략하고 `reviewer`는 팀원중 한명을 지정해주면 그 사람에게 확인 메일이 간다.

![결과](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bd23b48c-58ae-49ba-a301-0de5fd8b2cda/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220216T155050Z&X-Amz-Expires=86400&X-Amz-Signature=424531cb36a03823011e0a684d8bb86b4e09b9bb79e6bf81047c6c8e3066cd97&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

결과페이지다. 변경사항없이 `push`했기 때문에 `merge`버튼이 보이지 않는다. 만약 변경사항이 있다면 나오게 되고 conflict가 없다면 `merge`버튼이 초록색으로 보여서 그걸 누르면 `merge`가 완료된다.

이제 다른 팀원들은 `sprint00`을 `git pull`해서 원격 레포지토리와 본인 로컬 환경의 싱크를 맞추면 된다.

### 마무리! 칸반보드에서 이슈관리

![칸반보드](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1dbad8a6-6d14-44b7-bc59-f12204ffae58/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220216T155111Z&X-Amz-Expires=86400&X-Amz-Signature=995eaad6a6c6587e8aa6f8de8f1f878d4d77dbb5df6413d9132b1c9116c5c524&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

`todo`: 작업중
`done`: 작업완료, MR날리고 대기중
`closed`: 작업완료, merge완료

로 구분하며, 드래그 앤 드롭 방식으로 편리하게 이동이 가능.