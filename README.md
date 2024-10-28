# 🏫 우아한테크코스 7기 프리코스 2주차 미션: 자동차 경주
## 🎯 학습 목표
- 여러 역할을 수행하는 큰 함수를 단일 역할을 수행하는 작은 함수로 분리한다.
- 테스트 도구를 사용하는 방법을 배우고 프로그램이 제대로 작동하는지 테스트한다.
- 1주 차 공통 피드백을 최대한 반영한다.

## 📝 구현할 기능 목록

- [x] 경주할 자동차 이름 입력
- [x] 이동(시도)할 횟수 입력
- [x] 사용자가 잘못된 값을 입력할 경우 예외처리
- [x] 자동차 경주 차수별 실행 결과 출력
- [x] 단독 또는 공동 우승자 안내 문구 출력


## ❕ 프로그래밍 요구 사항
- [x] Node.js 20.17.0 버전에서 실행 가능해야 한다.
- [x] 프로그램 실행의 시작점은 App.js의 run()이다.
- [x] package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- [x] 프로그램 종료 시 process.exit()를 호출하지 않는다.
- [x] 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- [x] 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
- [x] 기본적으로 JavaScript Style Guide를 원칙으로 한다.
- [x] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- [x] 3항 연산자를 쓰지 않는다.
- [x] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- [x] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
- [x] @woowacourse/mission-utils에서 제공하는 Random 및 Console API를 사용하여 구현하기 

## 예외 처리
- [x] 자동차 이름 다섯 글자 초과일 경우
- [x] 자동차 이름 공백이 포함될 경우
- [x] 자동차 이름 중복일 경우
- [x] 시도 횟수 숫자 아닐 경우
- [x] 시도 횟수 음수일 경우
- [x] 시도 횟수 소수일 경우
- [x] 자동차 이름의 입력 값이 없는 경우
- [x] 시도 횟수의 입력 값이 없는 경우 