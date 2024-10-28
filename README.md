# javascript-racingcar-precourse

### 🏎️ 자동차 경주 게임

우아한테크코스 7기 웹 프론트엔드 프리코스 2주차 [자동차 경주] 구현 레포지토리

MVC 패턴을 통한 기능 구현을 목표했습니다.


## 📦 폴더 구조
![image](https://github.com/user-attachments/assets/3d975afb-d8ff-46d7-a268-f9bad46df9d8)

## 📋 구현할 기능 목록

### 🗂 Model

#### car.js (자동차 데이터 관리)

- [x] 자동차 상태 객체 생성
- [x] 자동차 상태 업데이트

#### racingGame.js (게임 상태 관리)

- [x] 게임 상태 객체 생성
- [x] 게임 상태 업데이트
- [x] 우승자(들) 찾기
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
- [x] 참가자 정보 검증하기 (Validator 활용)
- [x] 레이싱 게임 객체 생성하기 (RacingGame 활용)
- [x] 자동차들의 이동 처리하기 (RacingGame 활용)
- [x] 라운드 진행 상태 보여주기 (OutputView 활용)
- [x] 우승자 찾기 (RacingGame 활용)
- [x] 우승자 발표하기 (OutputView 활용)

### 🛠 Utils

#### validator.js (입력값 검증)

🏷️ 자동차 이름 검증

- [x] 최소 1대 이상의 자동차가 있는지 확인
- [x] 이름이 빈 문자열이나 공백인지 확인
- [x] 이름이 5자 이하인지 확인
- [x] 중복된 이름이 있는지 확인

<br>

🔢 시도 횟수 검증

- [x] 빈 값이나 공백이 입력되었는지 확인
- [x] 숫자가 아닌 값이 입력되었는지 확인
- [x] 음수가 입력되었는지 확인
- [x] 0이 입력되었는지 확인
- [x] 소수가 입력되었는지 확인
- [x] 입력된 값이 오버플로우를 발생시키는지 확인

#### random.js (난수 생성)

- [x] 난수 생성
  - MissionUtils.Random.pickNumberInRange 사용

#### constants.js (상수 정의)

- [x] 에러 메시지 상수
- [x] 입력 메시지 상수
- [x] 출력 메시지 상수
- [x] 자동차 이름 검증을 위한 테스트 케이스 상수
- [x] 시도 횟수 검증을 위한 테스트 케이스 상수

### 🎯 Application

#### App.js (애플리케이션 진입점)

- [x] 게임의 시작점으로서 GameController 초기화 및 실행

## 🧪 테스트 목록

### 자동차 이름 검증 테스트

- [x] 자동차 이름이 빈 문자열인 경우 에러를 발생 (["pobi", ""])
- [x] 자동차 이름이 공백인 경우 에러를 발생 (["pobi", " "])
- [x] 자동차 이름이 5자를 초과하는 경우 에러 발생 (["pobi", "abcdef"])
- [x] 중복된 자동차 이름이 있는 경우 에러 발생 (["pobi", "jason", "pobi"])

### 시도 횟수 검증 테스트

- [x] 시도 횟수가 빈 값이나 공백이 입력된 경우 에러 발생 (" ")
- [x] 시도 횟수가 숫자가 아닌 값이 입력된 경우 에러 발생 ("abc")
- [x] 시도 횟수가 음수가 입력된 경우 에러 발생 ("-1")
- [x] 시도 횟수가 0이 입력된 경우 에러 발생 ("0")
- [x] 시도 횟수가 소수가 입력된 경우 에러 발생("1.5")
- [x] 시도 횟수가 오버플로우를 발생시키는 값이 입력된 경우 에러 발생 ("Number.MAX_SAFE_INTEGER + 1")

### 테스트 결과
![우테코 2주차 테스트 결과](https://github.com/user-attachments/assets/b46ae919-dfba-40a5-bfa3-7552c8958574)


## ♻️ 리팩토링 목록

- outputView.js에서 printRoundStatus 메서드를 단일 책임 원칙에 따라 두 개의 메서드로 분리
- validator.js에서 기존에 하드코딩되었던 에러 메시지들을 constants.js의 ERROR_MESSAGES로 대체
- inputView.js에서 기존에 하드코딩되었던 입력 메시지들을 constants.js의 INPUT_MESSAGES로 대체
- outputView.js에서 기존에 하드코딩되었던 입력 메시지들을 constants.js의 OUTPUT_MESSAGES로 대체
- constants.js에서 테스트 케이스 상수 CAR_NAME_TEST_CASES, GAME_ROUNDS_TEXT_CASES의 이름들을 ERROR_MESSAGES 값들과 일치 시켜서 혼란을 방지
- constants.js에서 실제 구현 가능한 테스트 케이스만 남도록 NO_CARS 상수 삭제
- constants.js에서 불필요한 상수 제거 및 TEST_DESCRIPTIONS를 test.each 사용에 적합하게 사용
- ApplicationTest.js에서 테스트 설명을 상수들을 활용
- ApplicationTest.js에서자동차 이름 검증과 시도 횟수 검증을 test.each를 활용해서 코드 가독성 향상

## 💭 회고
🔗 [프리코스 2주차 회고](https://quickchabun.tistory.com/146)
