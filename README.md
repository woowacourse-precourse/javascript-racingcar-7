# 🚘 2주차 미션 - 자동차 경주

## ⚙️ 기능 목록

프로그램의 주요 기능 목록입니다. 앞에 번호가 붙은 제목이 프로그램의 주요 흐름을 나타냅니다. 구현 완료 시 체크박스(✅)를 사용하여 구현이 완료된 기능임을 명시했습니다.

### 1. 사용자 입력 처리

-   [✅] 콘솔에서 사용자 입력을 받는 기능 (자동차 이름, 시도할 횟수)
-   [✅] 예외 - 이름이 5자 이하가 아니라면 에러 발생
-   [✅] 예외 - 시도할 횟수가 숫자가 아니라면 에러 발생

```
🖨️ - 경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
🧑🏻‍💻 - pobi,woni,jun

🖨️ - 시도할 횟수는 몇 회인가요?
🧑🏻‍💻 - 5
```

### 2. 자동차 이름 추출

-   [✅] 쉼표를 기준으로 자동차 이름 구분

### 3. 시도하는 횟수 만큼 전진 또는 멈추기 수행

-   [✅] 0~9사이의 무작위 값을 구하여 무작위 값이 4 이상일 경우 전진
-   [✅] 각 횟수마다 실행 결과를 출력

```
🖨️  pobi : ---
    woni : --
    jun : ---
```

### 4. 시도가 종료되면 최종 결과 출력

-   [✅] 누가 우승했는지를 출력 (우승자가 여러명일 경우 쉼표를 이용하여 구분)

```
🖨️  최종 우승자 : pobi
```

### 5. 예외 처리

-   [✅] 잘못된 입력에 대한 에러 메세지 생성 - `Error` 객체를 생성하고 `throw`

<br/>

## 🧪 테스트 목록

리팩토링 이전에 전체적인 기능을 테스트하는 케이스를 작성했습니다. 테스트는 기능 테스트와 에러 테스트로 나누어 작성했으며 `test.each()`를 통해 파라미터화 했습니다.

### [기능 테스트](https://github.com/rosielsh/javascript-racingcar-7/blob/rosielsh/__tests__/FunctionTest.js)

-   [✅] 한 명이 우승하는 경우
-   [✅] 공동 우승하는 경우

### [에러 테스트](https://github.com/rosielsh/javascript-racingcar-7/blob/rosielsh/__tests__/ExceptionTest.js)

-   [✅] 자동차 이름이 5자를 초과하는 경우
-   [✅] 자동차 이름이 빈 문자열인 경우
-   [✅] 시도 횟수가 숫자가 아닌 경우
-   [✅] 시도 횟수가 음수나 0인 경우

<br/>

### 테스트 결과

`npm run test`로 로컬 환경에서 모두 `passed` 한 것을 확인했습니다.

![alt text](images/test1.png)

![alt text](images/test2.png)

<br/>

## 📋 리팩토링 목표

1. 클래스를 설계하고 객체지향 프로그래밍으로 개선
2. 함수가 여러 개의 기능을 하지 않도록 분리
3. 가독성 높은 코드를 위해 고민한 내용을 적용
4. 변수명을 역할에 대한 의도가 드러나게 짓도록 개선
5. Javascript에서 제공하는 API를 적극 활용

<br/>

## 📦 클래스 목록

| 클래스명            | 역할                               |
| ------------------- | ---------------------------------- |
| `App`               | 가장 최상단에서 프로그램을 실행    |
| `Car`               | 자동차                             |
| `CarGameController` | 자동차 경주 게임 진행자            |
| `GarGame`           | 자동차 게임의 실질적인 동작을 수행 |
| `InputHandler`      | 입력 처리기                        |
| `Printer`           | 출력 처리기                        |
| `Validator`         | 예외 처리기                        |

<br/>

## 디렉터리 구조

```
📂
├── README.md
├── 📂 __tests__
│   ├── ApplicationTest.js
│   ├── ExceptionTest.js // 예외 처리 테스트
│   └── FunctionTest.js // 통합 테스트
└── 📂 src
    ├── App.js // 프로그램 실행
    ├── Car.js // 자동차
    ├── CarGame.js // 자동차 게임 로직
    ├── CarGameController.js // 게임 진행
    ├── InputHandler.js // 입력
    ├── Printer.js // 출력
    ├── Utils.js // 유틸 함수
    ├── Validator.js // 유효성 검증
    ├── 📂 constants
    │   ├── Message.js
    │   └── Setting.js
    └── index.js
```
