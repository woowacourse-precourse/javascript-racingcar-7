# 기능

- [x] 사용자에게 자동차 이름 입력받기
  - [x] 빈 문자열인지 유효성 검사하기
  - [x] 쉼표를 기준으로 이름 분리하기
  - [x] 자동차 수 검사하기
  - [x] Service 클래스 호출하여 자동차 객체 생성하고 저장하기
- [x] 사용자에게 시도할 횟수 입력받기
  - [x] 시도 횟수 검증하기
- [x] 시도 횟수만큼 반복문 돌면서 자동차 전진 처리하기
  - [x] 반복문을 한번 돌 때마다 자동차 이름과 이동 횟수를 출력하기
- [x] 최종 우승자 출력하기

---

# TDD 개발 순서

1. 상수 저장
2. util 함수 관련 테스트 코드 작성 → util 함수 작성
3. validateUtil 함수 관련 테스트 코드 작성 → validateUtil 함수들 작성
4. Validator 클래스 관련 테스트 코드 작성 → Validator 클래스 작성
5. OutputView 클래스 관련 테스트 코드 작성 → OutputView 클래스 작성
6. CarModel 클래스 관련 테스트 코드 작성 → CarModel 클래스 작성
7. RacingCarService 클래스 관련 테스트 코드 작성 → RacingCarService 클래스 작성
8. RacingCarController 클래스 관련 테스트 코드 작성 → RacingCarController 클래스 작성

---

# 예외 케이스

### 1. 자동차 이름 입력

- 빈 문자열 or 공백만 입력

  - **이유**: 자동차의 이름을 받는 곳에 빈 문자열을 입력하는 것은 잘못된 입력이라 판단하여 예외 처리했습니다.
  - **예시**: ‘’, ‘ ‘

- 자동차 이름의 길이가 5글자 넘는 경우

  - **이유**: 기능 요구 사항에 포함되어 있습니다.
  - **예시**: ‘pobi,yeongi’

- 입력된 자동차 갯수가 1개 이하인 경우

  - **이유**: 자동차 경주를 하고, 의미 있는 결과를 얻기 위해서는 최소 2개의 자동차가 있어야 한다고 판단하여 1개 이하는 예외 처리 했습니다.
  - **예시**: ‘pobi’

- 입력된 자동차 갯수가 1000개 이상인 경우

  - **이유**: 의미 있는 데이터를 얻기 위해 직접 실행해 본 결과 1000개까지가 적합하다고 판단하여 1001개 이상이 되는 경우 예외 처리했습니다.
  - **예시**: 1001개의 자동차 이름 입력

- 중복된 자동차 이름이 존재하는 경우
  - **이유**: 중복된 자동차 이름이 존재하면 자동차를 구분할 수 없어서 예외 처리했습니다.
  - **예시**: ‘pobi,pobi,yeon’

### 2. 시도 횟수 입력

- 시도 횟수가 1 이하인 경우

  - **이유:** 최소 1회 이상은 실행 되어야 결과가 나오니, 1회 이하가 입력된 경우는 예외 처리했습니다.
  - **예시:** 0, -1, -2

- 시도 횟수가 10001 이상인 경우

  - **이유:** 시도 횟수가 10000번이 넘는 경우 실행 시간이 최소 1분이 넘어가 원하는 결과를 얻는 과정이 아니라 생각하여 예외 처리했습니다.
  - **예시:** 10001

- 시도 횟수가 정수가 아닌 경우
  - **이유:** 시도 횟수가 정수가 아니라 문자 혹은 소수가 입력되면 잘못된 입력으로 판단하여 예외 처리했습니다.
  - **예시 :** 1.5, 'ab'

---

# MVC + Service 패턴

**InputView**

- 사용자의 입력 처리

**OuputView**

- 화면 출력 처리

**RacingCarController**

- View와 RacingCarService를 사용하여 어플리케이션 전체 흐름을 관리

**RacingCarService**

- CarModel을 이용하여 복잡한 비즈니스 로직 처리

**CarModel**

- 자동차 이름과 전진 횟수 저장, 횟수를 변화시키는 비즈니스 로직 처리

**Validator**

- 사용자 입력값 유효성 검증 로직 처리

### view

| 클래스     | 메서드              |
| ---------- | ------------------- |
| InputView  | inputCarNames       |
| OutputView | printAdvancedResult |
|            | printEmptyLine      |
|            | printString         |
|            | printWinners        |

### controller

| 클래스              | 메서드 |
| ------------------- | ------ |
| RacingCarController | run    |

### service

| 클래스           | 필드        | 메서드             |
| ---------------- | ----------- | ------------------ |
| RacingCarService | tryNum,cars | saveCars           |
|                  |             | processCarMovement |
|                  |             | getWinners         |

### model

| 클래스   | 필드                   | 메서드           |
| -------- | ---------------------- | ---------------- |
| CarModel | carName, advancedCount | getCarName       |
|          |                        | getAdvancedCount |
|          |                        | setAdvancedCount |
|          |                        | advanceOnRandom  |

### util

| 함수              |
| ----------------- |
| isAdvancePossible |
| getCars           |

### validataionUtil

| 함수              |
| ----------------- |
| checkEmptyString  |
| checkMinCarNumber |
| checkMaxCarNumber |
| checkMinTryNumbe  |
| checkMaxTryNumber |

### vaildator

| 클래스    | 메서드            |
| --------- | ----------------- |
| vaildator | validateUserInput |
|           | validateCarNumber |
|           | validateTryNumber |
