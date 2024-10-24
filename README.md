# javascript-racingcar-precourse

## 목표

사용자 입력을 받아 동작하는 자동차 경주 게임 구현

## 🙏 요구사항

### 기능 요구사항

- 사용자는 경주를 진행할 자동차 이름을 입력한다.
  - `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)` 가 출력된 후 입력한다.
  - 자동차 이름은 한 줄에 여러대를 입력할 수 있으며 콤마(,)로 구분한다.
  - 자동차 이름은 5자 이하여야 한다.
- 사용자는 자동차가 몇번의 이동 기회를 가질 지 횟수를 입력한다.
  - `시도할 횟수는 몇 회인가요?` 가 출력된 후 입력한다.
  - - 이동횟수는 100회가 최대로 설정한다.
- 사용자가 입력한 횟수만큼 경주를 실행한다.
  - 각 자동차마다 0에서 9 사이의 무작위 값을 구한다.
  - 구한 무작위 값이 4 이상이면 자동차는 1만큼 전진한다.
  - 매 차수마다 각 자동차가 뽑은 숫자만큼 하이픈(-)을 이용하여 실행 결과를 출력한다.
    예시) joon이라는 차가 4를 뽑았을 경우 `joon : ----` 출력
  - 첫 실행 결과 출력 시 첫 줄에 `실행 결과` 를 출력한다.
- 지정된 횟수만큼 이동이 끝나면 자동자 경주는 마무리 된다.
- 마무리된 경주는 우승자를 발표한다.
  - 우승자는 1명 이상일 수 있다.
  - 우승자가 여러명일 경우 쉼표(,)로 구분하여 출력한다.
  - 우승자 출력 시 `최종 우승자 : ${우승자명}` 형식으로 출력한다.
- 만약 사용자가 잘못 입력할 경우 `[ERROR]`로 시작하는 메시지로 에러를 발생시킨다.

### 프로그래밍 요구사항

- 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 제공 라이브러리 : `@woowacourse/mission-utils`에서 제공하는 `Random` 및 `Console` API
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- 3항 연산자를 쓰지 않는다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.

<br/>

## 구현 목록

### 순서별 구현 목록

- [x] `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`을 출력한다.
- [x] 자동차 경주에 사용될 자동차명을 사용자로부터 입력받는다.
- [ ] 입력받은 자동차명을 쉼표(,)를 기준으로 분리하여 배열에 넣는다.
- [ ] 입력받은 자동차명이 5자 이하인지 검사한다.  
       -> 5자를 초과할 경우 `ERROR`를 발생시킨다.
- [ ] `시도할 횟수는 몇 회인가요?` 를 출력한다.
- [ ] 자동차 전진 시도 횟수를 사용자로부터 입력받는다.
- [ ] 횟수가 최대 횟수를 초과했을 경우 `ERROR`을 발생시킨다.
- [ ] 입력받은 횟수만큼 경주를 진행한다.
- 첫 경주를 시작할 때 `실행 결과`를 출력한다.
- [ ] 각 자동차마다 0-9사이의 무작위 값을 뽑는다.
- [ ] 숫자를 뽑을 때마다 자동차명과 뽑은 숫자를 하이픈(-)으로 표시하여 출력한다. `joon : ----`
- [ ] 무작위 값이 4 이상일 경우 자동차를 전진 횟수를 1 증가시킨다.
- [ ] 경주를 마무리한다.
- [ ] 전체 자동차들이 전진한 횟수를 비교하여 가장 많이 전진한 자동차의 이름을 저장한다.
      -> 가장 많이 전진한 자동차의 위치에 여러대의 자동차가 있다면 콤마(,)로 구분하여 저장한다.
- [ ] 최종 우승자를 `최종 우승자 : ${우승자명(우승자들명)}` 형식으로 출력한다.

### 기능별 구현 목록

**Output**

- [x] `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`을 출력한다.
- [ ] `시도할 횟수는 몇 회인가요?` 를 출력한다.
- [ ] `실행 결과`를 출력한다.
- [ ] 자동차명과 횟수(-)를 출력한다. `joon : ----`
- [ ] `최종 우승자 : ${우승자명}` 을 출력한다.
- [ ] `[ERROR]` 로 시작하는 에러를 출력한다.

**Input**

- [x] 자동차 경주에 사용될 자동차명을 사용자로부터 입력받는다.
- [ ] 자동차 전진 시도 횟수를 사용자로부터 입력받는다.

**Validation**

- [ ] 입력받은 자동차명이 5자 이하인지 검사한다.  
       -> 5자를 초과할 경우 `ERROR`를 발생시킨다.
- [ ] 횟수가 최대 횟수를 초과했을 경우 `ERROR`을 발생시킨다.

**Racing Process**

- [ ] 자동차 목록을 저장한다.
- [ ] 경주 횟수만큼 경주를 진행한다.
- [ ] 경주 시작 메시지를 출력시킨다.
- [ ] 0-9사이의 무작위 값을 뽑는다.
- [ ] 자동차명과 횟수를 출력시킨다.
- [ ] 무작위값이 4 이상일 경우 자동차를 전진 시킨다.
- [ ] 경주를 마무리하여 경주 결과를 전달한다.

**Winner Selector**

- [ ] 자동차들의 전진 횟수를 확인하여 우승자(가장 많이 이동한 자동차)를 배열에 저장한다.
- [ ] 최종 우승자를 전달하여 출력시킨다.

**Car**

- [ ] 입력받은 자동차명을 저장한다.
- [ ] 전진 횟수를 저장한다. - 초기값: 0
- [ ] 자동차의 전진 횟수를 증가 시킨다.

<br/>

## 🧐 Point

- 객체지향 관점에서 문제를 해결할 수 있다.
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만든다.
- Jest를 이용하여 테스트 코드를 작성할 수 있다.
- 에러를 세분화하여 에러 메세지를 명확하게 전달할 수 있다.
- 직관적인 네이밍을 할 수 있다.
