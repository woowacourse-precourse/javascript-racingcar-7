# 문자열 덧셈 계산기

## ✨ 과제 요구 사항

- 미션은 저장소를 포크하고 클론하는 것으로 시작한다.
- 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
  - Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
  - AngularJS Git Commit Message Conventions을 참고해 커밋 메시지를 작성한다.

## 📋 기능 요구 사항

초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
  - 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
  - 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

### 입출력 요구사항

#### 입력

- 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)
- 시도할 횟수

#### 출력

- 차수별 실행 결과
- 우승자
  - 단독 우승자 안내 문구 또는
  - 공동 우승자 안내 문구

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

## 🔧 프로그래밍 요구 사항 1

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 JavaScript Style Guide를 원칙으로 한다.

## 🔧 프로그래밍 요구 사항 2

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- 3항 연산자를 쓰지 않는다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.

# 🚀 설치 및 실행,테스트

```
npm install
npm run test
npm run start
```

# ✏️ 구현해야할 기능

### 1. 입력 기능

- [x] 사용자로부터 경주할 자동차 이름을 입력받는다.
  - [x] 이름이 5자를 초과하면 에러 메시지를 리턴한다.
  - [x] 중복 이름을 입력하면 에러 메시지를 리턴한다.
- [x] 경주를 시도할 횟수를 입력받는다.
  - [x] 음수, 문자(열), 빈문자 등 유효하지 않은 값을 입력할 경우 에러메시지를 리턴한다.

### 2. 전진 기능

- [x] 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우 전진한다.

### 3. 정지 기능

- [x] 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 미만일 경우 정지한다.

### 4. 출력 기능

- [x] 매 시도마다 각 자동차의 이름과 함께 위치를 출력한다.
- [ ] 경주가 끝난 후 가장 멀리 이동한 자동차를 우승자로 출력한다.
  - [ ] 우승자가 2대 이상일 경우 쉼표(,)를 기준으로 출력한다.

### 5. 에러 처리

- 자동차 이름 입력값
  - [x] 이름이 5자를 초과할 수 없다.
    - [x] `[ERROR] : 이름은 5자를 초과할 수 없습니다.`
  - [x] 중복 이름을 입력할 수 없다.
  - [x] `[ERROR] : 이름을 중복하여 사용할 수 없습니다.`
- 시도할 횟수
  - [x] 음수, 문자(열), 빈문자열, 0 을 입력할 수 없다.
    - [x] `[ERROR] : 유효하지 않은 횟수입니다.`
