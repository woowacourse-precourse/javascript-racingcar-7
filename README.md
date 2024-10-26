# javascript-racingcar-precourse

## 과제 진행 요구사항

- [x] README.me에 구현할 기능 목록 정리

## 기능 요구 사항

### 입력

- [ ] 각 자동차에 이름을 부여할 수 있다. ('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)')
- [ ] 사용자는 자동차 경주 횟수를 입력할 수 있다. ('시도할 횟수는 몇 회인가요?')

### 조건

- [ ] 자동차 이름은 쉼표(,)를 기준으로 구분한다.
- [ ] 자동차 이름은 5자 이하만 가능하다.
- [ ] 자동차는 0에서 9 사이에서 무작위 값을 구한다.
- [ ] 무작위 값이 4 이상일 경우 전진할 수 있다.

### 출력

- [ ] 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다. ('pobi : --')
- [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지 알려준다. ('최종 우승자 : pobi')
- [ ] 우승자는 한 명 이상일 수 있다. ('최종 우승자 : pobi, jun')

### 예외사항

- [ ] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함게 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.
- [ ] 나머지 예외 사항은 기본 기능 동작 후에 작성한다.

## 프로그래밍 요구사항

- [ ] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. (2까지만 허용한다.)

  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - depth를 줄이는 좋은 방법은 함수를 분리하는 것이다.

- [ ] 3항 연산자를 쓰지 않는다.
- [ ] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만든다.
- [ ] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.

## 라이브러리 사용

- @woowacourse/mission-utils에서 제공하는 Random 및 Console API를 사용하여 구현한다.
  - [ ] Random값 추출은 Random.pickNumberInRange()를 활용한다.
  - [ ] 사용자 값 입력 및 출력은 Console.readLineAsync()와 Console.print()를 활용한다.
