# 🚘 racingcar-7 기능 구현 목록

## 구현 기능 목록

### 1. 게임 시작

- [x] 자동차 이름 요구 멘트 출력
  - [x] 경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
- [x] 자동차 이름 입력
  - [x] 아무것도 입력하지 않았을 경우 에러처리
  - [x] 자동차 이름은 쉼표를 기준으로 구분
    - [x] 이름은 5자 이하만 가능
    - [x] 이름 중복 X
    - [x] 빈칸 입력 X
    - [x] 중간에 이름이 없을 경우
- [x] 횟수 요구 멘트 출력
  - [x] 시도할 횟수는 몇 회인가요?
- [x] 횟수 입력
  - [x] 숫자인가

### 1. 게임 진행

- [x] 실행 결과 멘트 출력
  - [x] 처음 초기 한번만 출력
  - [x] 실행 결과
- [x] 각 자동차의 0 ~ 9 사이의 랜덤 수 추출
  - [x] 0 ~ 3 사이일 경우 : 전진 X
  - [x] 4 ~ 9 사이일 경우 : 한칸 전진 O
- [x] 각 자동차 마다의 전진 결과 출력
  - **-** 로 전진 결과 출력

### 1. 게임 종료

- [x] 우승자 출력
  - [x] 단독 우승자일 경우 이름만 출력
  - [x] 공동 우승자일 경우 쉼표와 띄어쓰기로 구분하여 출력(pobi, jun)

### 프로그래밍 요구 사항 1

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 JavaScript Style Guide를 원칙으로 한다.

### 프로그래밍 요구 사항 2

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
