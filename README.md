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
- [x] 게임 상태 업데이트
- [x] 게임 종료 상태 확인

### 👀 View

#### inputView.js (사용자 입력 처리)

- [x] 자동차 이름 입력 받기
- [x] 입력받은 자동차 이름을 쉼표(,) 기준으로 구분
- [x] 시도 횟수 입력 받기

#### outputView.js (게임 상태 출력)

- [x] 현재 라운드 상태 출력
- [x] 최종 우승자 출력
- [x] 에러 메시지 출력

### 🎮 Controller

#### gameController.js (게임 로직 제어)

- [x] 자동차 이름 입력받기 (InputView 활용)
- [x] 시도 횟수 입력 받기 (InputView 활용)
- [ ] 참가자 정보 검증하기 (Validator 활용)
- [ ] 레이싱 게임 객체 생성하기 (RacingGame 활용)
- [ ] 자동차들의 이동 처리하기 (RacingGame 활용)
- [ ] 라운드 진행 상태 보여주기 (OutputView 활용)
- [ ] 우승자 찾기 (RacingGame 활용)
- [ ] 우승자 발표하기 (OutputView 활용)

### 🛠 Utils

#### validator.js (입력값 검증)

🏷️ 자동차 이름 검증

- [x] 최소 1대 이상의 자동차가 있는지 확인
- [x] 이름이 빈 문자열이나 공백인지 확인
- [x] 이름이 5자 이하인지 확인
- [x] 중복된 이름이 있는지 확인

<br>

🔢 시도 횟수 검증

- [ ] 빈 값이나 공백이 입력되었는지 확인
- [ ] 숫자가 아닌 값이 입력되었는지 확인
- [ ] 음수가 입력되었는지 확인
- [ ] 0이 입력되었는지 확인
- [ ] 소수가 입력되었는지 확인
- [ ] 입력된 값이 오버플로우를 발생시키는지 확인

#### random.js (난수 생성)

- [x] 난수 생성
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

## ♻️ 리팩토링 목록

- outputView.js에서 printRoundStatus 메서드를 단일 책임 원칙에 따라 두 개의 메서드로 분리
