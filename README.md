# 🚗 자동차 경주 게임

이 프로젝트는 여러 대의 자동차가 주어진 횟수 동안 전진 또는 멈추는 자동차 경주 게임을 구현하는 것을 목표로 합니다. 사용자는 경주할 자동차 이름과 이동할 횟수를 입력하며, 경주가 끝난 후 우승자를 확인할 수 있습니다.

## 기능 목록

### 1. 자동차 입력 기능

- **자동차 이름 입력받기**: 쉼표(`,`)로 구분된 이름을 입력받는다.
  - [ ] 자동차 이름이 공백인지 확인.
  - [ ] 각 자동차 이름이 5자 이하인지 확인.
  - [ ] 자동차 이름에 중복이 있는지 확인.
  - [ ] 쉼표로 구분된 자동차 이름이 제대로 입력되었는지 확인.

### 2. 시도 횟수 입력 기능

- **이동 횟수 입력받기**: 시도할 횟수를 입력받는다.
  - [ ] 입력 값이 숫자인지 확인.
  - [ ] 1 이상, 10 이하의 유효 범위 내인지 확인.

### 3. 게임 진행 기능

- **자동차 이동 결정**: 무작위 값을 사용해 전진 여부를 결정한다.
  - [ ] 0에서 9 사이의 무작위 숫자를 생성한다.
  - [ ] 무작위 값이 4 이상일 경우 전진, 3 이하일 경우 멈춘다.
- **자동차 이동 기록**: 각 자동차의 이동 상황을 기록한다.
  - [ ] 전진할 때마다 해당 자동차의 진행 경로에 `-` 추가.

### 4. 우승자 결정 기능

- **최종 우승자 판단**: 가장 많이 전진한 자동차(들)를 결정한다.
  - [ ] 여러 명의 우승자가 있을 경우, 쉼표로 구분하여 출력한다.

### 5. 에러 처리

- **입력 에러 처리**: 잘못된 입력이 들어올 경우 에러 메시지를 출력하고 프로그램을 종료한다.
  - [ ] 자동차 이름 입력 오류 시 `[ERROR]`로 시작하는 메시지 출력.
  - [ ] 시도 횟수 입력 오류 시 `[ERROR]`로 시작하는 메시지 출력.

---

## 테스트

### 1. 입력 테스트

- [ ] **자동차 이름이 쉼표로 구분되었는지 확인**: 쉼표로 구분된 문자열을 입력했을 때, 각각의 이름이 올바르게 분리되는지 테스트.
  - 예: `pobi,woni,jun` 입력 시 `['pobi', 'woni', 'jun']`이 반환되는지 확인.
- [ ] **자동차 이름이 공백으로 입력되지 않았는지 확인**: 이름이 공백으로만 이루어진 경우 에러 메시지가 출력되는지 확인.
  - 예: `pobi,,woni` 입력 시 `[ERROR] 자동차 이름은 공백일 수 없습니다.` 출력.
- [ ] **자동차 이름의 길이가 5자를 초과하지 않는지 확인**: 이름이 5자를 넘는 경우 에러 메시지가 출력되는지 확인.
  - 예: `pobi,wonderful,woni` 입력 시 `[ERROR] 자동차 이름은 5자 이하만 가능합니다.` 출력.
- [ ] **중복된 자동차 이름이 없는지 확인**: 중복된 이름이 입력된 경우 에러 메시지가 출력되는지 확인.
  - 예: `pobi,pobi,woni` 입력 시 `[ERROR] 중복된 이름이 있습니다.` 출력.

### 2. 시도 횟수 입력 테스트

- [ ] **시도 횟수가 숫자인지 확인**: 시도 횟수가 숫자가 아닌 경우 에러 메시지가 출력되는지 확인.
  - 예: `abc` 입력 시 `[ERROR] 시도 횟수는 숫자여야 합니다.` 출력.
- [ ] **시도 횟수가 1~10 범위 내인지 확인**: 시도 횟수가 범위를 벗어난 경우 에러 메시지가 출력되는지 확인.
  - 예: `15` 입력 시 `[ERROR] 시도 횟수는 1에서 10 사이여야 합니다.` 출력.

### 3. 게임 진행 테스트

- [ ] **무작위 값에 따른 자동차 이동 여부 확인**: 각 자동차가 무작위 값에 따라 전진하거나 멈추는지 확인.
  - 예: 무작위 값이 4 이상일 때만 자동차가 전진하는지 테스트.
- [ ] **시도 횟수만큼 게임이 진행되는지 확인**: 입력된 시도 횟수만큼 게임이 반복해서 실행되는지 확인.
  - 예: 시도 횟수가 5일 경우, 각 자동차가 5번 이동했는지 확인.
- [ ] **최종 우승자 결정 테스트**: 가장 많이 전진한 자동차가 우승자로 결정되는지 확인.
  - 예: `pobi`가 5번 전진하고, `woni`가 4번 전진했을 때 `pobi`가 우승자로 결정되는지 확인.

### 4. 에러 처리 테스트

- [ ] **자동차 이름에 대한 입력 오류 상황 테스트**: 잘못된 자동차 이름 입력 시 올바른 에러 메시지가 출력되는지 확인.
- [ ] **시도 횟수에 대한 입력 오류 상황 테스트**: 잘못된 시도 횟수 입력 시 올바른 에러 메시지가 출력되는지 확인.

---

## 함수 분리

### 1. 입력 처리 함수

- **`getCarNames()`**: 사용자로부터 자동차 이름을 입력받는다.

  - **`validateCarName()`**: 각 자동차 이름에 대한 유효성을 검사하는 함수.
    - 이름이 5자 이하인지 확인.
    - 중복된 이름이 없는지 검사.

- **`getMoveAttempts()`**: 사용자로부터 시도 횟수를 입력받고, 유효성을 검사한다.
  - **`validateMoveAttempts()`**: 시도 횟수의 유효성을 검사하는 함수.
    - 1~10 사이의 숫자인지 확인.

### 2. 게임 진행 함수

- **`race()`**: 시도 횟수만큼 각 자동차의 전진을 결정하는 메인 함수.
- **`moveCar()`**: 무작위 값을 통해 자동차가 전진할지 멈출지 결정하는 함수.

### 3. 출력 함수

- **`printRaceResult()`**: 각 시도 후 자동차들의 상태를 출력하는 함수.
- **`printWinners()`**: 최종 우승자를 출력하는 함수.

### 4. 에러 처리 함수

- **`handleInputError()`**: 입력이 잘못되었을 때 에러 메시지를 출력하고 프로그램을 종료하는 함수.

---

## 커밋 규칙

- 각 기능 구현 완료 후 기능 단위로 커밋한다.
- 커밋 메시지는 AngularJS Git Commit Message Conventions를 따른다.
