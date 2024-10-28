# Week2 - 자동차 경주 게임


## 기능 요구 사항

- 주어진 횟수 동안 여러 대의 자동차가 전진 또는 멈출 수 있는 간단한 자동차 경주 게임을 구현한다.

- 각 자동차는 이름을 부여할 수 있으며, 경주 중 전진할 때마다 해당 이름을 함께 출력한다.

- 자동차 이름은 쉼표(,)로 구분되며, 이름은 최대 5자 이하만 가능하다.

- 사용자는 경주할 횟수를 입력할 수 있다.

- 자동차가 전진하는 조건은 0에서 9 사이의 무작위 값을 생성하여, 이 값이 4 이상일 경우이다.

- 경주가 끝난 후 누가 우승했는지 결과를 보여준다. 우승자는 한 명 이상일 수 있다.

- 우승자가 여러 명일 경우, 쉼표(,)로 구분하여 표시한다.

- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지를 출력하고 프로그램이 종료된다.

&nbsp;


## 입출력 요구 사항

- 입력:
  - 경주할 자동차 이름 (쉼표로 구분)
    - 예시: `pobi,woni,jun`
  - 시도할 횟수
    - 예시: `5`

- 출력:
  - 라운드별 실행 결과 (자동차의 진행 상태를 '-'로 표시)
  - 예시:
    ```
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
    ```

  - 최종 우승자 출력
    - 단독 우승자: `최종 우승자 : pobi`
    - 공동 우승자: `최종 우승자 : pobi, jun`

&nbsp;


## 기능 구현 목록 체크 리스트

- [x] **자동차 이름 입력 기능**
  - 사용자가 경주할 자동차의 이름을 쉼표로 구분하여 입력받는다.
  - 입력받은 각 이름이 5자 이하인지 확인하며, 유효하지 않은 경우 "[ERROR]"로 시작하는 메시지를 출력하고 종료한다.

- [x] **이동 횟수 입력 기능**
  - 사용자가 시도할 횟수를 입력받고, 해당 값이 양의 정수인지 검사한다.
  - 유효하지 않은 경우 "[ERROR]"로 시작하는 메시지를 출력하고 종료한다.

- [x] **자동차 전진 기능**
  - 각 자동차에 대해 매 시도마다 0에서 9 사이의 무작위 값을 생성하여 4 이상일 경우 한 칸 전진한다.
  - `@woowacourse/mission-utils`의 `Random.pickNumberInRange()` 메서드를 활용한다.

- [ ] **라운드별 진행 상황 출력 기능**
  - 각 라운드가 끝날 때마다 각 자동차의 이름과 해당 라운드까지의 진행 상태를 출력한다.
  - 각 전진 상황은 `-`로 표시한다.

- [ ] **우승자 결정 기능**
  - 모든 라운드가 종료된 후 가장 멀리 이동한 자동차(들)를 우승자로 결정하여 출력한다.
  - 우승자가 여러 명일 경우, 쉼표로 구분하여 출력한다.

- [ ] **에러 처리 기능**
  - 사용자가 잘못된 입력을 할 경우 "[ERROR]"로 시작하는 메시지를 출력하고 프로그램을 종료한다.

&nbsp;


## 과제 진행 요구 사항 체크 리스트

- [x] 자동차 경주 게임을 포크하고 클론하기.

- [x] 기능 구현하기 전, 구현할 기능 목록을 `README.md`에 정리하기.

- [ ] Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
    - [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)을 참고해 커밋 메시지를 작성한다.

&nbsp;


## 프로그래밍 요구 사항

- [ ] `Node.js 20.17.0` 버전에서 실행 가능해야 한다.

- [ ] package.json 파일은 변경할 수 없다.
    - 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리 사용은 불가하다.

- [ ] 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.

- [ ] 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
    - 기본적으로 [JavaScript Style Guide](https://github.com/airbnb/javascript)를 원칙으로 한다.

- [ ] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.

- [ ] 3항 연산자를 쓰지 않는다.
 
- [ ] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.

- [ ] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.

&nbsp;


### 프로그래밍 환경 설정

- [x] `ESLint` 세팅하기.
    - [x] `프로그래밍 요구 사항2` 의 규칙을 `ESLint rule` 에 추가하기.

- [x] **Node.js 버전** `20.17.0` 이상인지 확인하기.

- [x] **npm 버전** `10.8.2` 이상인지 확인하기.


&nbsp;



## 실행 요구 사항 및 제출 체크 리스트

- [ ] 프로그램 실행의 시작점은 App.js의 run().

- [ ] 프로그램 종료 시 process.exit()는 호출하지 않는다.

- [ ] 요구 사항에 명시된 출력 형식을 따르지 않으면 `0점`

- [ ] 테스트가 실패하면 점수가 `0점`이 되므로 제출하기 전에 반드시 확인한다.