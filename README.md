# javascript-racingcar-precourse

- 기간: 2024.10.23 15:00 ~ 2024.10.29 00:00
- 미션: 자동차 경주
- Node.js 20.17.0 버전 이상
- Git 커밋 단위는 기능 목록 단위로 추가
  - AngularJS Git Commit Message Conventions을 참고
- 자바스크립트 코드 컨벤션 지키기(Airbnb JavaScript Style Guide)

### 학습 목표

- 여러 역할을 수행하는 큰 함수를 단일 역할을 수행하는 작은 함수로 분리
- 테스트 도구 사용 방법 학습 후 적용
- 1주차 공통 피드백 최대한 반영

## 구현할 기능 목록

- 경주할 자동차 이름 입력(사용자)
  -  이름은 **쉼표(,)** 기준으로 구분 + 이름은 **5자 이하**만 가능

- 시도할 회수 입력(사용자)

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈춤
  - **무작위 값이 4 이상일 경우 전진**

- 횟수 마다 실행 결과 출력
  - **자동차 이름**과 **전진 여부(-)** 출력

- 자동차 경주 완료 후 우승자 출력
  - 우승자는 한 명 이상일 수 있음
  - 우승자가 **여러 명**일 경우 **쉼표(,)**를 이용하여 구분

- 사용자가 **잘못된 값을 입력**한 경우
  - "[ERROR]"로 시작하는 메시지와 함께 Error 발생
  - 애플리케이션 종료