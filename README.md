# javascript-racingcar-precourse

## 과제 진행 요구 사항

- 미션은 자동차 경주 저장소를 포크하고 클론하는 것으로 시작한다.
- 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
- Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
  - AngularJS Git Commit Message Conventions을 참고해 커밋 메시지를 작성한다.
- 자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.

## 기능 요구 사항

초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 입출력 요구 사항

- 입력

  - 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)
    ```
    pobi,woni,jun
    ```
  - 시도할 횟수
    ```
    5
    ```

- 출력

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

- 실행 결과 예시

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

## 프로그래밍 요구 사항 1

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 `App.js`의 `run()`이다.
- `package.json` 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 JavaScript Style Guide를 원칙으로 한다.

## 프로그래밍 요구 사항 2

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- 3항 연산자를 쓰지 않는다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
  - 테스트 도구 사용법이 익숙하지 않다면 아래 문서를 참고하여 학습한 후 테스트를 구현한다.
    - Using Matchers
    - Testing Asynchronous Code
    - Jest로 파라미터화 테스트하기: test.each(), describe.each()

### 라이브러리

- @woowacourse/mission-utils에서 제공하는 Random 및 Console API를 사용하여 구현해야 한다.

  - Random 값 추출은 Random.pickNumberInRange()를 활용한다.
  - 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다.

- 사용 예시
  - 0에서 9까지의 정수 중 한 개의 정수 반환
    ```
    MissionUtils.Random.pickNumberInRange(0, 9);
    ```

## CheckList - FlowChart

### 구현 전

- [x] 자동차 경주 저장소를 포크하고 클론
- [x] 과제 진행 요구 사항, 기능 요구 사항, 프로그래밍 요구 사항과 관련하여 README.md에 작성

### 구현 중

- [ ] 기능 단위로 커밋 진행
- [ ] 기능 요구 사항에 기재되지 않은 내용은 스스로 판단 후 구현
- [x] 자동차 n대 입력
  - [x] 문자열 입력받기
  - [x] 자동차 이름은 쉼표(,)를 기준으로 구분된다.
  - [x] 자동차 이름이 5자 이하로 작성되어야함 -> 5자 초과 시 ERROR
  - [x] 공백 또는 빈 문자열 관련하여 -> 예외처리
  - [x] 중복으로 동일 자동차 이름 입력시 예외
- [x] 자동차 이동 횟수 입력
  - [ ] 입력이 숫자인지 확인 -> 숫자 외 다른 값 입력시 ERROR
  - [ ] 시도횟수 값 범위 확인 -> 0,음수 값 입력시 ERROR
- [ ] 자동차 객체로 관리 : 이름, 현재 위치값,
- [ ] 이동 횟수 , 이동 난수 생성 후 전달
- [ ] 0~9사이 무작위 값 추출 후 4이상일 경우 전진
  - [ ] 전진시 -로 표시하기
- [ ] 우승자 출력
  - [ ] 우승자 여러 명일 경우 ,로 이용하여 구분

### 구현 이후

- [ ] 제출 1. Github를 통한 제출 : 프리코스 과제 제출 문서 참고
- [ ] 제출 2. 지원플랫폼에 PR 링크 제출 : 제출 가이드 참고
- [ ] 느낀점 / 배운점 / 많은 시간 투자 부분 작성
- [ ] 테스트 실행 가이드 진행
  - 터미널에서 node --version을 실행하여 Node.js 버전이 20.17.0 이상인지 확인한다.
  - 아래 명령을 입력하여 패키지를 설치한 후 실행하는 데 문제가 없어야 한다.
    ```
    npm install
    npm run test
    npm run start
    ```
- [ ] 기능을 올바르게 구현했더라도 요구 사항에 명시된 출력 형식을 따르지 않으면 0점을 받게 된다.
- [ ] 기능 구현을 완료한 후 아래 가이드에 따라 모든 테스트가 성공적으로 실행되는지 확인한다.
- [ ] 테스트가 실패하면 점수가 0점이 되므로 제출하기 전에 반드시 확인한다.
- [ ] 제출 기간 맞추기 : 일요일 15시 ~ 월요일
- [ ] 종료 후에 추가 푸시 금지

## 학습목표

- 여러 역할을 수행하는 큰 함수를 단일 역할을 수행하는 작은 함수로 분리한다.
- 테스트 도구를 사용하는 방법을 배우고 프로그램이 제대로 작동하는지 테스트한다.
- 1주 차 공통 피드백을 최대한 반영한다.

## 배운점 - 추가적인 학습내용

## 느낀점

## 회고

- 아래 질문에 대한 중간 회고를 진행하고 소감에 구체적인 결과를 작성한다. 소감은 텍스트로 작성해야 하며 외부 링크는 허용하지 않는다.

  - 지원서에 작성한 목표를 얼마나 달성하고 있다고 생각하나요? 그 이유는 무엇인가요?
  - 지원서에 작성한 목표를 변경해야 한다고 생각하시나요? 그렇다면 그 이유와 어떤 목표로 변경하고 싶으신가요?
  - 프리코스를 진행하면서 눈에 띄는 변화나 깨달은 점이 있나요?

## 한줄 평

## 많은 시간 투자 부분
