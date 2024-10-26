# javascript-racingcar-precourse

### 기본 기능

- [x] 자동차 이름은 쉼표(,)를 기준으로 구분하여 5자 이하로 입력 받는다.
- [x] 시도할 횟수를 입력 받는다.
- [x] 각 자동차의 무작위 값은 0~9 사이의 숫자가 나타날 수 있으며, 4 이상일 시, 전진하도록 한다.
- [ ] 자동차 경주가 완료된 후, 누가 우승했는지(제일 많이 전진했는지) 알려주도록 한다. 우승자는 한 명 이상이다.
- [ ] 우승자가 여러 명일 경우, 쉼표(,)를 이용하여 구분하도록 한다.

### 예외 처리

- [ ] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.
  - [ ] 자동차 이름을 하나도 입력하지 않을 때
  - [ ] 자동차 이름을 6자 이상 입력하였을 때
  - [ ] 시도 횟수를 0 또는 아무 것도 입력하지 않았을 때
- [ ] 우승자가 한 명도 없을 때(아무도 전진한 사람이 없을 때, 무작위 값이 모두 4 미만일 때)

### 추가로 생각할 점

- [ ] 들여쓰기 depth 2까지만 허용
- [ ] 3항 연산자 사용하지 않았는지 체크
- [ ] 함수는 한 가지 일만 하도록
- [ ] Jest 테스트 도구를 이용하여 기능 목록이 정상적으로 작동하는지 체크
