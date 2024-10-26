# javascript-racingcar-precourse

## 구현할 기능 목록

- [x] 경주할 자동차의 이름을 입력 받는다
- [x] 몇번 이동할 것인지 횟수(시도 횟수)를 입력 받는다.
- [x] 각 자동차의 이동 횟수를 저장할 자동차 수 크기의 배열을 만든다.
- [ ] 시도 횟수만큼 도는 반복문을 만든다.
  - [ ] 횟수를 도는 동안 각 자동차마다 무작위 값을 구한다.
  - [ ] 무작위 값이 4이상인 경우 전진 배열에 +1을 한다.
  - [ ] 차의 이름과 전진 횟수대로 "-"를 출력한다.
- [ ] 가장 많이 전진한 차량의 이름을 출력한다.

## 예외 처리

- [ ] 자동차 이름이 5자를 넘어가는 경우 예외처리한다.
  - [ERROR] 자동차 이름은 5자 이하만 가능합니다.
- [ ] 자동차 이름이 없는 경우 예외처리한다.
  - [ERROR] 자동차 이름을 입력해주세요.
- [ ] 자동차 이름을 입력할 때, 쉼표 사이에 이름이 없다면 예외 처리한다.
  - [ERROR] 쉼표 사이에 이름을 입력해주세요.
- [ ] 자동차 이름을 입력할 때, 구분자가 쉼표가 아닌 경우 예외처리한다.
  - [ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분해주세요.
- [ ] 이동할 횟수(시도 횟수)가 숫자가 아닌 경우 예외처리한다.
- [ ] 이동할 횟수(시도 횟수)가 음수인 경우 예외처리한다.
  - [ERROR] 시도 횟수를 양수 형식으로 입력해주세요.
