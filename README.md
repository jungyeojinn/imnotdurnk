# [음주 습관 개선 서비스] 나안취햄ㅅ어

# [1] About the Project

## **주제**
![image](/uploads/70390f0ecce97de12562eef6e4d8879f/image.png)

개인의 음주 패턴을 관리해 **절제된 음주**와 **안전한 귀가**를 독려하기 위한 음주 습관 개선 서비스 


## **기획 동기**

이 프로젝트는 팀원들의 공통된 고민으로부터 기획되었습니다. 술에 너무 취해 가족,연인 등 주변 사람들과 갈등 을 겪은 팀원, 한시간 거리를 세시간이 걸려서 간적이 있는 팀원 등 저희 모두 **음주를 조절하지 못해 많은 문제를 겪었던 적이 있었다**는 공통점이 있었습니다.

그리고 이것은 실제 저희들에게만 한정된 문제는 아니었습니다. 실제 20~30대들을 130명을 대상으로도 음주습관에 관련된 설문조사를 진행했습니다. 조사를 해보니 취중 행동을 후회하고 절주,금주를 다짐한 사람이 57%이지만 그중 40%가 절주를 시도했지만 실패한 것을 알 수 있었습니다. 이처럼 절주에 어려움을 겪는 사람들에게 개인의 음주 패턴을 관리해 **절제된 음주**와 **안전한 귀가**를 독려하기 위해 기획했습니다.




## Feature

### 메인 기능

### **1. 나의 음주 기록**
 <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/음주기록.gif" width="600" height="400" /><br/>
  
- 일정 별 **음주량, 만취 정도 피드백** 기록, 4가지 색상으로 구분해 **일정별 만취 정도** 파악 가능
- 만취 게임, 경로 찾기 기능과 연동되어 **게임 점수, 귀가 시간도 기록** 가능
- 지난 12개월간 월별 음주 횟수, 일별/월별 평균 음주량 평균, 연간 총 음주량을 **시각화**한 통계


### **2. 최저 택시비 경로 계산**
   <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/경로.gif" width="600" height="400" /><br/>
- 출발지(기본값=현재 위치 자동 입력), 목적지 주소 검색 시 자동완성 검색
- **최적 경로 탐색**
- **실시간 현재 위치 확인**(백그라운드 앱 실행으로 실시간 GPS 위치 추적 가능)
- 목적지 근처 100m이내에서 위치 확인시, 해당하는 음주 일정이 있는 경우 **귀가 시간 자동 등록**


### **3. 만취 측정 미니 게임**
   <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/게임.gif" width="600" height="400" /><br/>
비틀거림, 발음 꼬임, 오타, 기억력 저하를 기준으로 게임 제작

#### **(1) 밸런스 게임**

- 휴대폰을 기울여 어미 오리를 이동해가면서 랜덤으로 배치된 새끼오리를 찾는 게임
- Device Orientation API를 활용해 웹 페이지가 모바일 장치의 가속도계를 활용해 **실시간으로 장치의 기울기 정보를 감지**

#### **(2) 발음 게임**

- 주어진 랜덤 문장을 읽어서 발음 정확도를 판단하는 게임
- 한국 전자통신 연구원의 발음도 정확도 판단 API를 활용했고, 이에 필요한 WAV형식, 160k주파수 등의 조건을 맞추기 위해 recordRTC 라이브러리로 녹음파일을 변환

#### **(3) 타이핑 게임**

- 20초 내에 주어진 랜덤 문장을 따라 타이핑하는 게임
- 전체 글자수 대비 일치하는 글자수를 기준으로 점수를 환산, 제한 시간 초과시, 현재 입력값을 기준으로 점수에 반영

#### **(4) 카드 맞추기 게임**

- 5초간 카드 전체 이미지를 확인후, 20초동안 동일한 이미지의 6쌍의 카드를 찾는 게임
- 만약 틀릴 시 -1점 감점 존재하며, 제한 시간 초과시, 현재 입력값을 기준으로 점수에 반영



## Technologies

### Back-end

[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1724212070352?alt=media&token=d73946df-b180-45d5-b0ea-f502acc4f407)](https://github.com/msdio/stackticon)

### Front-end

<img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Frame 1.png"  width="500" /><br/>
  


# [2] 🛠 Getting Started

## Prerequisites
*실행환경 설정하기(Ubuntu 기준) - 설치 소프트웨어, 라이브러리*

### Docker
1. 충돌 날 수 있는 패키지 삭제
   ```bash
   for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
   ```
2. apt 로 도커 볼륨 생성
   ```bash
   # Add Docker's official GPG key:
    sudo apt-get update
    sudo apt-get install ca-certificates curl
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc

    # Add the repository to Apt sources:
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
   ```
3. docker 엔진 최신버전 설치
   ```Bash
   sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   ```
4. docker 엔진 정상 설치 확인
   ```
   sudo docker run hello-world
   ```
   - hello-world 가 pull 받아져서 정상 실행된다고 뜨면 성공
### Node.js
1. [Node.js 공식사이트-다운로드](https://nodejs.org/en/download/package-manager)
   ```bash
    # installs fnm (Fast Node Manager)
    curl -fsSL https://fnm.vercel.app/install | bash

    # activate fnm
    source ~/.bashrc

    # download and install Node.js
    fnm use --install-if-missing 20

    # verifies the right Node.js version is in the environment
    node -v # should print `v20.16.0`

    # verifies the right npm version is in the environment
    npm -v # should print `10.8.1`
   ```
### MySQL
1. MySQL Docker 컨테이너 실행
   ```bash
    # 이미지 가져오기
    $ docker pull mysql

    # 컨테이너로 실행 
    # <password>에 비밀번호(ssafy)를 넣음
    $ docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=<password> -d -p 3306:3306 mysql

    # 컨테이너로 올린 mysql bash로 접속
    $ docker exec -it mysql-container bash

    # 루트 사용자로 접속하여 데이터베이스 생성
    $ mysql -u root -p
    $ create database `imnotdurnk_db';

    # 존재하는 데이터베이스 목록 확인
    $ show databases;
   ```
### Redis
1. Docker 이미지 가져오기
   ```bash
    # redis 이미지 가져오기
    $ docker pull redis

    # volume 생성
    $ docker volume create redis_data

    # 네트워크 생성
    $ docker network create redis-network --driver bridge

    # redis 환경 설정 파일 생성
    $ vi redis.conf
   ```
2. redis.conf 파일 작성
   ```bash
   bind 0.0.0.0
   port 6379
   save 900 1
   ```
3. 컨테이너 실행
   ```bash
   $ docker run \
   -d \
   --name redis \
   -p 6379:6379 \
   --network redis-network \
   -v ~/{redis.conf 생성 경로}/redis.conf:/etc/redis/redis.conf \
   -v redis_data:/data \
   redis:latest redis-server /etc/redis/redis.conf
   ```
### JDK21
1. JDK21 설치 및 설정
   ```bash
    $ sudo apt update

    # 자바 설치
    $ sudo apt install openjdk-21-jdk

    # 자바 설치 확인
    $ java -version
    openjdk version "21.0.3" 2024-04-16
    OpenJDK Runtime Environment (build 21.0.3+9-Ubuntu-1ubuntu122.04.1)
    OpenJDK 64-Bit Server VM (build 21.0.3+9-Ubuntu-1ubuntu122.04.1, mixed mode, sharing)
   ```
2. JDK 환경변수 설정
   - bash 환경 : `~/.bashrc`
   - zsh 환경: `~/.zshrc `
   ```bash
   export PATH=%PATH:/bin:/usr/local/bin:/usr/bin
   export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
   export PATH=$PATH:$JAVA_HOME/bin
   ```
### Gradle
1. Gradle 공식 홈페이지에서 버전 확인 (8.7.0 사용)
2. wget 설치
   ```bash
   $ sudo apt install wget
   ```
3. Gradle 설치
   ```bash
   # 설치 파일 다운로드
    $ wget https://services.gradle.org/distributions/gradle-8.7.0-bin.zip -P /tmp

    # 압축 해제
    $ sudo unzip -d /opt/gradle /tmp/gradle-8.7.0-bin.zip

    # 압축 해제가 잘 되었는지 확인
    $ ls /opt/gradle/gradle-8.7.0
   ```
4. 환경변수 설정
   ```bash
   $ sudo vi /etc/profile.d/gradle.sh
   ```
   ```bash
   $ export GRADLE_HOME=/opt/gradle/gradle-8.7.0
   $ export PATH=${GRADLE_HOME}/bin:${PATH}
   ```
   ```bash
   # 스크립트 실행
   $ sudo chmod +x /etc/profile.d/gradle.sh
   
   # 환경변수 로드
   source /etc/profile.d/gradle.sh
   ```
5. Gradle 설치 및 버전 확인
   ```bash
   $ gradle -v
   ```

## Installation
1. Repository 클론
```bash
git clone https://lab.ssafy.com/s11-webmobile2-sub2/S11P12A609.git
```

## Configuration
*실행을 위해 확인해야 할 부분*

1. `git clone` 이후 React(web) 프로젝트 실행 방법
   - 주석 처리 되어 있는 api 요청 링크 2개 로컬용으로 변경 (원격용 링크 주석 처리)
    ```JavaScript
    // 게임 등 로그인이 필요없는 api 요청시 사용(토큰없이도 요청 가능한 용)
    const apiNoToken = axios.create({
        //baseURL: 'http://{back서버 IP주소 또는 도메인}:8080', //로컬용1
        baseURL: 'https://i11a609.p.ssafy.io/api', // 원격용1
        timeout: 5000, // 5초 내 서버 응답 없으면 요청 취소
    });

    const api = axios.create({
        //baseURL: 'http://{back서버 IP주소 또는 도메인}:8080', //로컬용2
        baseURL: 'https://i11a609.p.ssafy.io/api', // 원격용2
        timeout: 5000, // 5초 내 서버 응답 없으면 요청 취소
        withCredentials: true, // 이게 있어야 refresh Token받을 수 있음
        //zustand로 저장된 accessToken 불러와서 매 요청의 헤더에 넣기
    });
    ```
     - `npm i`
     - `npm run dev` →  http://localhost:5173/ 경로에서 로컬 테스트 가능
2. `git clone` 이후 React Native(mobile) 프로젝트 실행 방법
     - 앱 화면을 띄울 안드로이드 기기와 유선 연결 (USB 디버깅 및 연결 허용)
     - `npm i`
     - `npm start` → `a`
     - 모바일 앱에서 위치 권한 - “항상 허용” 선택 (백그라운드 위치 추적)
     - 모바일 앱에서 마이크 액세스 권한 - “앱 사용 중에만 허용” 선택 (음성 게임)
3. `git clone` 이후 Spring Boot 프로젝트 실행 방법
     - clone 받은 프로젝트는 환경 변수가 docker-compose 파일에 설정되어있기 때문에 로컬에서 실행시키기위해 application.yml 파일을 아래로 교체해준다.
     - {} 안의 내용들을 해당하는 내용으로 적절히 수정한다.
    ```yaml
    spring:
      application:
        name: imnotdurnk_backend
        title: 나안취햄ㅅ어
      security: ignored=/**   # 일단 비활성화

      config:
        import: application-secret.yml

        # DB Setting
      datasource:
        driver-class-name: com.mysql.cj.jdbc.Driver
        url: jdbc:mysql://localhost:3306/imnotdurnk_db
        username: {mysql유저아이디}
        password: {mysql유저비밀번호}
      data:
        redis:
          host: localhost
          port: 6379
          password: {redis비밀번호 없다면 생략}
      jpa:
        database: mysql
        database-platform: org.hibernate.dialect.MySQL8Dialect
        properties:
          hibernate:
            storage_engine: innodb
            format_sql: true
            use_sql_comments: true
            globally_quoted_identifiers: true
        hibernate:
          ddl-auto: {최초 실행시: create, 이후: validate}
        open-in-view: false
        show-sql: false

      # Mail Setting
      mail:
        host: smtp.gmail.com
        port: 587
        username: {발송이메일주소}
        password: {2차 인증 앱 비밀번호(구글)}
        properties:
          mail:
            smtp:
              debug: true
              auth: true
              ssl:
                enable: false
                trust: smtp.gmail.com
              starttls:
                enable: true

    jwt:
      expiretime:
        accesstoken: 1800000 #ms #30분
        refreshtoken: 432000000 #ms #5일
      secretkey:
        accesstoken: {accesstoken}
        refreshtoken: {refreshtoken}

    cloud:
      aws:
        credentials:
          accessKey: {bucket-accessKey}
          secretKey: {bucket-secretKey}
        region:
          static: {bucket-region}
        s3:
          bucket: {bucket-name}

    etri:
      accessKey: {etri-accesskey}

    Odsay:
      apikey: {Odsay-apikey}

    logging:
      level:
        root: info
        com:
          imnotdurnk:
            domain:
              auth: info
              calendar: info
              map: info
              gamelog: info
              user: info
            global:
              util: info

    springdoc:
      swagger-ui:
        disable-swagger-default-url: true
        path: /swagger-ui.html
      api-docs:
        path: /v3/api-docs
      show-actuator: true
      default-produces-media-type: application/json
    ```
    - 프로젝트 빌드 및 실행
    ```bash
    #spring boot 프로젝트 빌드
    $ ./gradlew clean build
    
    # 권한 오류가 생긴다면 권한 부여하고 빌드 재시도
    $ chmod +x ./gradlew
    
    # 빌드된 JAR 파일 실행
    $ java -jar ./build/libs/imnotdurnk_backend-0.0.1-SNAPSHOT.jar
    ```

# [3] Usage

## 초기 화면

- 서비스 접속 초기화면으로 다음 페이지가 나타납니다.
- 로그인이 되어 있지 않은 경우: 우측 상단 로그인/회원가입 버튼 표시
- 로그인이 되어 있는 경우: 우측 상단 마이페이지 버튼 표시

    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_094114.jpg" width="200" height="400"/>
    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_095522.jpg" width="200" height="400"/>

## 회원가입

- 회원가입 버튼을 누르면 유효성 검사가 진행되고 통과하지 못한 경우 경고 문구가 입력창 하단에 표시됩니다.
- 회원가입 약관 동의 버튼을 클릭하지 않으면 경고 문구가 표시됩니다.

    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_094131.jpg" width="200" height="400"/>
    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_094247.jpg" width="200" height="400"/>

- 회원가입 전 이메일 인증 절차를 거칩니다. 회원가입 시 입력한 이메일로 인증번호가 발송되며 인증번호가 일치하면 회원가입이 완료됩니다.

    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_2024-08-16_at_11.21.42_AM.png" width="800" height="400"/>
    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_094359.jpg" width="200" height="400"/>

## 로그인

   <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_094406.jpg" width="200" height="400"/>

## 비밀번호 찾기

- 이메일로 임시 비밀번호를 전송받을 수 있습니다.

    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_094556.jpg" width="200" height="400"/>
    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/image.png" width="800" height="400"/>

## 추가 정보 등록

- 회원가입 후 서비스에 필요한 추가 정보를 등록합니다. 닉네임, 주소, 비상 연락망을 등록합니다.
- 구글맵 API에서 조회된 정확한 상세 주소를 저장합니다.
- 서비스에서 제공할 통계에 활용될 주량 정보를 받습니다.

    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_094655.jpg" width="200" height="400"/>
    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_094745.jpg" width="200" height="400"/>
    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_094816.jpg" width="200" height="400"/>

## 미니 게임

- 만취 정도를 판단하기 위한 네가지 미니 게임(발음 게임, 밸런스 게임, 타이핑 게임, 기억력 게임)이 있습니다.

    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_095424.jpg" width="200" height="400"/>

- 게임을 진행하면 해당 날짜에 사용자가 등록한 일정이 있는지 확인합니다. 등록된 일정이 있다면 게임 기록이 자동으로 저장되고, 등록된 일정이 없다면 술을 마시고 있는지 확인합니다.
- 술을 마시고 있다면 일정을 생성하고 해당 일정에 게임 기록을 저장합니다.

    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_095615.jpg" width="200" height="400"/>
    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_095802.jpg" width="200" height="400"/>
    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_095626.jpg"  width="200" height="400"/>
    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_095709.jpg"  width="200" height="400"/>

### 발음 게임

- 랜덤 문장을 읽고 이에 따른 발음 정확도를 점수로 계산합니다.
- 한국전자통신연구원의 발음도 정확도 판단 API를 활용했고, 이에 필요한 WAV 형식, 160K 주파수 등의 조건을 맞추기 위해 recordRTC 라이브러리로 녹음 파일을 변환합니다.

   <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/발음게임.gif" width="200" height="400"/>

### 밸런스 게임

- 모바일 장치를 기울여 어미오리를 움직여서 랜덤 배치된 새끼 오리를 찾습니다.
- Device오리엔테이션 API를 통해 모바일 장치의 가속도계를 활용해 실시간으로 장치의 기울기 정보를 감지합니다.

   <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_095602.jpg" width="200" height="400"/>

### 타이핑 게임

- 랜덤으로 주어진 문장을 타이핑해서 전체 글자수 대비 일치하는 글자수를 기준으로 점수를 환산합니다.

   <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/타이핑게임.gif" width="200" height="400"/>

### 기억력 게임

- 20초의 제한시간 내에 동일한 이미지의 6쌍의 카드를 얼마나 찾을 수 있는지를 점수로 계산합니다.

   <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/카드게임.gif"  width="200" height="400"/>

## 음주 기록 캘린더

- 음주 일정을 확인합니다. 취한 정도에 따라 색상을 다르게 표시합니다. 해당 날짜 일정을 모아볼 수 있습니다.

    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_100256.jpg" width="200" height="400"/>
    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_100317.jpg" width="200" height="400"/>
    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_095922.jpg" width="200" height="400"/>
    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_095758.jpg" width="200" height="400"/>

- 일정은 캘린더에서 미리 등록하거나, 미니 게임 시 기록 저장을 위해 등록할 수 있습니다.

    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_095643.jpg" width="200" height="400"/>
    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_095709.jpg" width="200" height="400"/>
    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_100155.jpg" width="200" height="400"/>
    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_100034.jpg" width="200" height="400"/>

- 등록된 일정을 수정할 수 있습니다.

    <img src="exec/포팅%20매뉴얼%20a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_100335.jpg" width="200" height="400"/>

- 끝난 일정에 대해 피드백을 등록할 수 있습니다. 해당 일정에서의 음주량을 기록합니다.

    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_100058.jpg" width="200" height="400"/>

## 최소 택시비 경로 찾기

- GPS를 이용해 자동으로 현재 위치를 출발 위치로 설정할 수 있습니다.
- 구글맵 API를 이용하여 정확한 위치 정보를 받아옵니다.

    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_100939.jpg" width="200" height="400"/>
    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_100945.jpg" width="200" height="400"/>
    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_100635.jpg" width="200" height="400"/>

- 오디세이 API에서 추천경로 데이터(기존 경로탐색에서 볼 수 있는 것과 같음)를 제공 받고, GTFS 데이터셋을 활용하여 막차가 끊기는 지점부터 다시 남아있는 노선을 확인해 도착지까지 가까이 갈 수 있는 경로를 구합니다.
  그 마지막 위치를 기준으로 카카오 모빌리티 API를 활용해 택시비 정보를 받아와서 사용자는 최종 추천 경로를 제공받습니다.

    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_100910.jpg" width="200" height="400"/>
    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_100923.jpg" width="200" height="400"/>
    <img src="exec/포팅 매뉴얼 a7bb50ead2de4d36b773437db35e8261/Screenshot_20240817_101039.jpg" width="200" height="400"/>

- 사용자의 실시간 위치를 지속적으로 파악합니다.
- 도착지에 도착하면 24시간 내 일정이 있었는지 확인하고 가장 가까운 일정에 도착 시간이 자동으로 기록됩니다.

<br/>

# [4] Contribution

[`contributing guide`][contribution-url]를 참고해주세요. 버그 수정에는 bugfix를, 기능 구현에는 feat을 사용할 수 있습니다.

<br/>

# [5] 📖 Acknowledgement

## Frontend

- [코딩 컨벤션 참고](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- [TanStack Query(aka. react query) 에서 자주 사용되는 개념 정리](https://github.com/ssi02014/react-query-tutorial?tab=readme-ov-file#react-query-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95)
- [React Native Global Styles](https://stackoverflow.com/questions/30853178/react-native-global-styles)
- [useEffect가 아닌 useFocusEffect 사용하여 stack 구조 화면 초기화하기](https://velog.io/@skyu_dev/React-Navigation-Bottom-Tab%EC%9D%98-Require-cycle-warning-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)
- [react-native-google-autocomplete를 이용해서 위치 자동완성 기능 만들기](https://velog.io/@acwell94/React-Native-react-native-google-autocomplete%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-%EC%9C%84%EC%B9%98-%EC%9E%90%EB%8F%99%EC%99%84%EC%84%B1-%EA%B8%B0%EB%8A%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0)
- [가속도 센서를 이용해 움직이는 View 만들기](https://velog.io/@jshme/falling-view-using-accelerometer-sensor)

## Backend

- [Spring Boot ResponseDto 응답 형태](https://velog.io/@faulty337/Spring-Boot-ResponseDto%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%A0%EA%B9%8C)
- [Custom Response 생성하기](https://velog.io/@baekgom/Custom-Response-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0)
- [dto의 toEntity를 어떻게 사용해야할까?](https://hangjastar.tistory.com/246)
- [Dto와 Entity를 분리하는 이유, 분리하는 방법](https://velog.io/@0sunset0/Dto와-Entity를-분리하는-이유-분리하는-방법)
- [빌더 패턴의 권장 이유](https://devfunny.tistory.com/337)
- [Builder Pattern : 장단점](https://kangworld.tistory.com/246)
- [Docker의 IPTABLES 접근](https://security-gom.tistory.com/65)
- [hibernate의 ddl-auto 속성의 종류와 주의해야할 점](https://colabear754.tistory.com/136)
- [Spring Data JPA 는 어떻게 interface 만으로도 동작할까? (feat. reflection, proxy)](https://pingpongdev.tistory.com/25)
- [Spring Boot JPA 사용하여 회원가입 구현하기](https://gh402.tistory.com/36)
- [Spring Guide - Directory 패키지 구조 가이드](https://cheese10yun.github.io/spring-guide-directory/)
- [Spring Boot JPA 사용하여 회원가입 구현하기](https://cheese10yun.github.io/spring-guide-directory/)
- [ETRI 공공 인공지능 오픈 API 발음 교정 - ETRI API 발음 평가 사용법](https://jee00609.github.io//pronunciationcorrection/pronunciationCorrection-ETRIAPI-Error/)
- [[JAVA] WAV 파일을 RAW Data 로 변환 및 저장하기 (Wav to Raw) ](https://jee00609.github.io//java/how-convert-wav-to-raw2/)

<br/>

# [6] :email: Contact

### 📧 나안취햄ㅅ어 공식 이메일: imnotdurnk.ssafy@gmail.com

### 📧 팀원 이메일

|  **이름**  |  **포지션**  |       **이메일**       |
| :--------: | :----------: | :--------------------: |
| **박희연** | **Frontend** |  godeeyeon@gmail.com   |
| **이나연** | **Frontend** | naye07@g.hongik.ac.kr  |
| **정상영** | **Frontend** | ssanggun2yam@gmail.com |
| **박다솔** | **Backend**  |    ds10x2@gmail.com    |
| **육예진** | **Backend**  |  yukyj0418@gmail.com   |
| **정여진** | **Backend**  |  yeojin9905@naver.com  |

<!-- url -->

[contribution-url]: CONTRIBUTION.md
