# javascript-racingcar-precourse

## 소개

초간단 자동차 경주 게임입니다.

## 입출력

- 입력

  - 자동차 이름(쉼표로 구분, 이름은 5자 이하)
  - 총 이동 회수

- 출력

  - 자동차 이름과 자동차들의 전진 상태
  - 결과값
  - 우승자 이름
  - 사용자가 잘못된 값을 입력할 경우, "[ERROR]"로 시작하는 메시지와 함께 Error 발생

## 기능 목록

- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려주는 기능

  - 우승자는 여러명일 수 있다.
  - 공동 우승인 경우 쉼표를 이용하여 구분한다.

- 자동차를 전진시키는 기능
  - 무작위 값이 4이상인 경우 전진
  - 4미만인 경우 정지

## 활용한 모듈

- @woowacourse/mission-utils에서 제공하는 Random 및 Console API를 사용.
  - Random 값 추출 : Random.pickNumberInRange()를 활용
  - 사용자의 값을 입력 및 출력 : Console.readLineAsync()와 Console.print()를 활용
