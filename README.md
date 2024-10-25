# javascript-racingcar-precourse

### 🏎️ 자동차 경주 게임

우아한테크코스 7기 웹 프론트엔드 프리코스 2주차 [자동차 경주] 구현 레포지토리

MVC 패턴을 통한 기능 구현을 목표했습니다.

## 📋 구현할 기능 목록

### 🗂 Model

#### car.js (자동차 데이터 관리)

- [x] 자동차 상태 객체 생성
- [x] 자동차 상태 업데이트

#### racingGame.js (게임 상태 관리)

- [x] 게임 상태 객체 생성
- [ ] 게임 상태 업데이트
- [ ] 게임 종료 상태 확인

### 👀 View

#### inputView.js (사용자 입력 처리)

- [ ] 자동차 이름 입력 받기
- [ ] 시도 횟수 입력 받기

#### outputView.js (게임 상태 출력)

- [ ] 현재 라운드 상태 출력
- [ ] 최종 우승자 출력
- [ ] 에러 메시지 출력

### 🎮 Controller

#### gameController.js (게임 로직 제어)

- [ ] 게임 초기화
- [ ] 게임 진행
- [ ] 우승자 결정 함수

### 🛠 Utils

#### validator.js (입력값 검증)

- [ ] 자동차 이름 검증
- [ ] 시도 횟수 검증

#### random.js (난수 생성)

- [ ] 난수 생성 함수
  - MissionUtils.Random.pickNumberInRange 사용

#### constants.js (상수 정의)

- [ ] 게임 규칙 관련 상수
- [ ] 에러 메시지 상수
- [ ] 출력 메시지 상수

#### error.js (에러 처리)

- [ ] 입력값 검증 에러
- [ ] 게임 진행 에러

### 🎯 Application

#### app.js (애플리케이션 진입점)

- 게임 실행 함수 (run)
  - GameController 통해 게임 진행
