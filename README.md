# javascript-racingcar-precourse

## 기능 요구 사항

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈춤을 수행
- 각 자동차에는 이름이 할당
- 자동차 이름 입력은 쉼표(,)를 기준으로 구분하고, 이름은 5자 이하만 가능
- 사용자는 이동 가능 횟수를 입력
- 0에서 9사이의 무작위 갑셍서 4 이상일 경우 자동차는 전진
- 경주 완료 이후 우승한 자동차의 이름을 출력하고, 우승자가 여러 명인 경우 쉼표(,)를 구분하여 출력
- 사용자가 잘못된 입력을 한 경우 "[ERROR]"로 시작하는 메시지와 함께 애플리케이션 종료

## 프로그래밍 요구 사항

- indent의 depth는 2까지 허용
- 3항 연산자를 사용하지 않음
- 함수가 한 가지 일만 하도록 작게 설계
- Jest를 사용해 기능 목록이 작동하는지 테스트

## 구현 기능 목록

- [x] 자동차 이름과 횟수 횟수 입력
- [x] 자동차 이름들을 쉼표(,)를 기준으로 구분
- [x] 자동차별로 랜덤한 숫자들을 추출하고, 4 이상의 숫자가 나올 경우 전진
- [x] 한 횟수동안 자동차들의 전진 기록을 출력
- [x] 우승자를 계산하고 출력
- [x] 잘못된 입력에 대한 에러 처리
  - 예외 상황
  - [x] 자동차의 이름이 5자를 초과한 경우
  - [x] 자동차 이름에 쉼표(,)이외에 특수 문자가 입력된 경우
  - [x] 자동차 이름이 모두 입력되지 않은 경우 (쉼표 이전, 이후에 이름이 입력되지 않은 경우)
  - [x] 자동차 이름이 중복된 경우
  - [x] 입력 횟수가 양의 정수가 아닌 경우
