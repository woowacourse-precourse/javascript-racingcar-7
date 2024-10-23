# javascript-racingcar-precourse

## 📋 기능 명세서

- [x] 게임이 시작하면, `경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)` 문구 출력
- [x] `시도할 횟수는 몇 회인가요?` 문구 출력
- [x] `실행 결과` 문구 출력
- [x]`사용자` 가 입력한 게임의 횟수 만큼 반복하여 게임을 실행
  - [x] `carList`를 객체화 하여 안에는 `name`, `distance`, `rank` key를 생성
  - [x] `distance`는 `컴퓨터`로 부터 0부터 9까지 숫자 중 **`4 이상`**일 경우에 `-` 하나씩 추가
  - [x] `name` 과 `distance`를 `pobi : --` 와 같은 형식으로 매 게임마다 결과를 출력.
- [ ] 마지막 라운드가 끝나고 각 `distance` key를 비교하여 `rank`를 확인
- [ ] rank가 1위인 이름을 `최종 우승자 :` 문구와 함께 같이 출력
  - [ ] 단독 우승자의 경우 : `최종 우승자 : pobi`
  - [ ] 공동 우승자의 경우: `최종 우승자 : pobi, jun`

### 💣 상황 별 예외 처리

1. 사용자가 입력한 **자동차 이름**이 유효하지 않을 때

- [x] 자동차 이름은 5자 초과 → `[ERROR]` 문구를 출력하고 게임을 종료
- [x] 쉼표(,)가 아닌 다른 특수문자가 있는 경우 → `[ERROR]` 문구를 출력하고 게임을 종료

2. 사용자가 입력한 **횟수**가 유효하지 않을 때

- [x] 입력 값이 숫자가 아닌 경우 → `[ERROR]` 문구를 출력하고 게임을 종료

## 📗 기능 요구 사항 체크 리스트

---

- [ ] 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- [ ] 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [ ] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [ ] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [ ] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [ ] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분
- [ ] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료

---

# 🚨 요구 사항

## 📕 과제 진행 요구 사항 체크 리스트

- [x] 자동차 경주 repo 포크하고 클론
- [x] 기능을 구현하기 전 `README.md`에 구현할 기능 목록을 정리
- [ ] Git의 커밋 단위는 앞 단계에서 `README.md`에 정리한 기능 목록 단위로 추가
  - [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)을 참고해 커밋 메시지를 작성

## 📘 프로그래밍 요구 사항 체크 리스트

---

### ✅ 초기 세팅

- [x] **Node.js 20.17.0** 버전에서 실행
- [x] 자바스크립트 코드 컨벤션을 지키면서 프로그래밍 한다.
  - **JavaScript Style Guide**를 원칙 → [Airbnb 자바스크립트 스타일 가이드](https://github.com/airbnb/javascript)를 기준

### ✅ 실행 환경

- [ ] 프로그램 실행의 시작점은 `App.js의 run()` 이다.
- [ ] 프로그램 종료 시 `process.exit()` 호출 X
- [ ] `package.json` 파일은 변경 불가
      제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용 불가
- [ ] 이번 과제에선 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다

### 🎯 추가 프로그래밍 요구 사항

- [ ] indent depth를 **2**까지만 허용
- [ ] 3항 연산자 사용 불가
- [ ] 함수가 한 가지 일만 하도록 최대한 작게 만들기
- [ ] Jest를 이용하여 기능 목록이 정상적으로 작동하는 테스트 코드로 확인

# 📌 과제 제출 전 체크 리스트

---

- [ ] 요구 사항에 명시된 출력 형식을 따르지 않으면 0점
- [ ] 테스트가 실패하면 점수가 0점이 되므로 제출하기 전 반드시 확인
