## 도커 관련 명령어

#### 로컬에서 mysql 컨테이너로 접속
- `sudo apt-get install mysql-client`
- `docker-compose up` 해서 mysql container가 돌아가는 채로
- `mysql -h 127.0.0.1 -P 3306 -u colorfit -p`
- 하고 비밀번호는 `colorfit`


#### 디비 정보 확인
- mysql 쉘에 접속한 상태에서
- `use colorfit;` => colorfit db를 사용하겠다는 뜻 (우리서비스의 디비)
- `show tables;` => colorfit db의 모든 테이블을 보여줌
- 예를들어서 app_user 디비의 상태를 확인하고싶다면, `select * from app_user;`


#### 서비스 실행
- 아래는 colorfit/ directory에서 모두 진행해야함
- `docker-compose up` => docker-compose.yaml 실행해서 컨테이너들 띄운다
- `docker-compose down` => 다른 터미널 창을 켜서 입력하면 컨테이너들이 종료된다

