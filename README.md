# javascript-racingcar-precourse

## 기능 요구사항

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 프로그래밍 요구사항

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
- 기본적으로 JavaScript Style Guide를 원칙으로 한다.

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- 3항 연산자를 쓰지 않는다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
- 테스트 도구 사용법이 익숙하지 않다면 아래 문서를 참고하여 학습한 후 테스트를 구현한다.
  - [Using Matchers](https://jestjs.io/docs/using-matchers)
  - [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
  - [Jest로 파라미터화 테스트하기: test.each(), describe.each()](https://www.daleseo.com/jest-each)

## 라이브러리

- @woowacourse/mission-utils에서 제공하는 Random 및 Console API를 사용하여 구현해야 한다.
  - Random 값 추출은 Random.pickNumberInRange()를 활용한다.
  - 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다.

```ts
MissionUtils.Random.pickNumberInRange(0, 9);
```

## 기능 목록

- [x] 자동차를 입력받는 기능
  - [x] 자동차 이름의 길이가 5자 이하인지 검사
  - [x] 중복된 자동차의 이름이 있는지 검사
- [x] 몇 번의 이동을 할지 입력받는 기능
  - [x] 입력 validation
- [x] 무작위 숫자 생성 기능
- [ ] 자동차가 움직일지 결정하는 기능
- [ ] 자동차가 움직이는 기능
- [ ] 실행 기능
- [ ] 우승자 출력 기능

## 예외 상황

- 자동차 입력을 받을때 입력이 ,으로 시작허거나 ,으로 끝날 때
- 파싱한 자동차 이름의 길이가 5를 넘길 때
- 몇번의 이동을 할지 입력 받았을 때
  - 숫자가 아닐때
  - 정수가 아닐때
  - 0 이하 일때
  - infinity일때

## 비 기능적 사항

- [ ] 상수 객체 불변성를 보장하기 위한 deepFreeze 함수
