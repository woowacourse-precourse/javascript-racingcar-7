# javascript-racingcar-precourse

## 자동차 경주 기능 구현 목록

### 1. 사용자 입력 받기

- 1. 경주할 자동차 이름

  - "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)" 메시지 출력

  - 경주할 자동차 이름 입력받기

    - 이름은 쉼표(,) 기준으로 구분

    - 이름은 5자 이하만 가능

    - 예: pobi,woni,jun

  - 예외 처리

    - 빈 문자열이 입력됐을 때

    - 공백만 입력됐을 때

- 2. 시도할 횟수

  - "시도할 횟수는 몇 회인가요?" 메시지 출력

  - 예: 5

  - 예외 처리

    - 빈 문자열이 입력됐을 때

    - 숫자 이외의 문자가 입력됐을 때

    - 0이 입력됐을 때

- 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션 종료

## 2. 자동차 경주

- "실행 결과" 메시지 출력

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.

- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.

- 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.

- 우승자는 한 명 이상일 수 있다.

## 3. 출력

- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다.

- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

- 예: 최종 우승자 : pobi, jun
