# javascript-racingcar-precourse

## 미션 - <자동차 경주 🛣️> 기능 구현 목록

- [x] 사용자 입력 받기
  - [x] 자동차 이름 입력 받기.
    - [x] `Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)')` 사용.
    - [x] `,`로 구분하여 자동차의 전진 횟수 객체 생성.
  - [x] 시도할 횟수 입력 받기.
    - [x] `Console.readLineAsync('시도할 횟수는 몇 회인가요?')` 사용.

<br>

- [x] 결과 계산하기
  - [x] 자동차의 수만큼 0~9 사이의 Random Number 생성.
    - [x] `Random.pickNumberInRange(0, 9);` 사용.
  - [x] Random Number가 4 이상이면, 1칸 전진.
  - [x] 입력받은 시도 횟수만큼 반복.

<br>

- [x] 결과 출력하기
  - [x] `Console.print()` 사용.
  - [x] 각 차수별 전진 결과 출력.
  - [x] 최종 우승자 출력.
    - [x] 복수 우승자는 `,`로 구분.

<br>

- [ ] 사용자 입력에 대한 예외 처리하기
  - [x] [ERROR]로 시작하는 메시지와 함께 Error를 발생.
  - [x] 자동차 이름 예외 처리.
    - [x] 이름이 5자를 초과하거나, 없는 경우 Error.
    - [x] 이름이 중복되는 경우 Error.
    - [x] 이름에 알파벳 외의 문자가 포함된 경우 Error.
  - [ ] 시도할 횟수 예외 처리.
    - [ ] 0 이하의 수 Error.
    - [ ] 정수가 아닌 경우 Error.
    - [ ] 숫자가 아닌 경우 Error.
