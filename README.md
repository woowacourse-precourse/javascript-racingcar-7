# javascript-racingcar-precourse

# [2주차] 자동차 경주

---

## 🚀 목표

### 학습 목표

- 여러 역할을 수행하는 큰 함수를 단일 역할을 수행하는 작은 함수로 분리한다.
- 테스트 도구를 사용하는 방법을 배우고 프로그램이 제대로 작동하는지 테스트한다.
- [1주 차 공통 피드백](https://docs.google.com/document/d/1l76wiXzM1Pp8AXuJ9V9oYPMVU4gR7NotVZM-zLoKVus/edit?tab=t.0)을 최대한 반영한다.
  - 요구 사항을 정확하게 준수하기
  - 커밋 메세지 의미 있게 작성하기
  - console.log() 대신 디버거 사용하기
  - 의미 없는 주석을 사용하지 않기
  - javascript에서 지원하는 API 활용하기

### 회고

아래 질문에 대한 중간 회고를 진행하고 소감에 구체적인 결과를 작성한다. 소감은 텍스트로 작성해야 하며 외부 링크는 허용하지 않는다.

- 지원서에 작성한 목표를 얼마나 달성하고 있다고 생각하나요? 그 이유는 무엇인가요?
- 지원서에 작성한 목표를 변경해야 한다고 생각하시나요? 그렇다면 그 이유와 어떤 목표로 변경하고 싶으신가요?
- 프리코스를 진행하면서 눈에 띄는 변화나 깨달은 점이 있나요?

---

## 🔎 과제 진행 요구 사항

- 미션은 [자동차 경주](https://github.com/woowacourse-precourse/javascript-racingcar-7) 저장소를 포크하고 클론하는 것으로 시작한다.
- **기능을 구현하기 전 `README.md`에 구현할 기능 목록을 정리**해 추가한다.
- Git의 커밋 단위는 앞 단계에서 `README.md`에 정리한 기능 목록 단위로 추가한다.
  - [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)을 참고해 커밋 메시지를 작성한다.
- 자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.

## 🎯 기능 요구 사항

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 🔊 입출력 요구 사항

#### 입력

- 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)

```
pobi,woni,jun
```

- 시도할 횟수

```
5
```

#### 출력

- 차수별 실행 결과

```
pobi : --
woni : ----
jun : ---
```

- 단독 우승자 안내 문구

```
최종 우승자 : pobi
```

- 공동 우승자 안내 문구

```
최종 우승자 : pobi, jun
```

#### 실행 결과 예시

```
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

## 🚨 프로그래밍 요구 사항 1

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 `App.js`의 `run()`이다.
- `package.json` 파일은 변경할 수 없으며, **제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.**
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)를 원칙으로 한다.

## 🚨 프로그래밍 요구 사항 2

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- 3항 연산자를 쓰지 않는다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
  - 테스트 도구 사용법이 익숙하지 않다면 아래 문서를 참고하여 학습한 후 테스트를 구현한다.
    - [Using Matchers](https://jestjs.io/docs/using-matchers)
    - [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
    - [Jest로 파라미터화 테스트하기: test.each(), describe.each()](https://www.daleseo.com/jest-each/)

### 라이브러리

- `@woowacourse/mission-utils`에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.
  - Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.
  - 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.

#### 사용 예시

- 0에서 9까지의 정수 중 한 개의 정수 반환

```
MissionUtils.Random.pickNumberInRange(0, 9);
```

---

## 📌 추가 기능 요구 사항

#### 자동차 이름

- 중복을 허용하지 않는다.
- 공백을 허용하지 않는다.
- 쉼표(,)를 제외한 특수문자는 허용한다.
- 자동차는 최대 5대만 입력 가능하다.

#### 시도할 횟수

- 양의 정수만 허용한다.
- 시도 횟수의 최소 1, 최대 10이다.

## 📝 구현할 기능 목록

#### Utils

- **getCarName(), getTryNum()** 경주에 참여하는 자동차 이름과 이동할 횟수는 `Console.readLineAsync()`로 입력 받는다.
- **carCountLimitCheck()**을 사용해 자동차를 최대 5대만 받는다.
- **checkSpace()** 공백을 확인한다.
- **duplicateCheck()** 중복 검사는 `includes()`으로 한다.
- **checkTryNum()**`^[1-9]+$/.test()` 1~9인지 확인한다.

#### reacingCar

- 전진 조건의 무작위 값은 `Random.pickNumberInRange()`로 구한다.
- 무작위 값이 4이상일 경우 해당 자동차의 value값에 '-'을 추가한다.

#### content

- `Object.freeze({})`로 메세지를 선언한다.
