# javascript-racingcar-precourse

# 기능 목록

| 우선순위 | 작업            |
| -------- | --------------- |
| 🔴       | 명시된 요구사항 |
| 🟡       | 추가 예외케이스 |

## 입력

- [x] 🔴 **경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분) 입력**
  - [x] 🔴 `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n` 출력, 입력받기
  - [x] 🔴 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션 종료
    - [x] 🔴 자동차 이름을 쉼표(,)를 기준으로 구분하여 배열로 저장
    - [x] 🔴 이름이 5자 이하인지 검증
    - [x] 🟡 중복된 이름 검증
    - [x] 🟡 이름 빈 문자열 검증
- [ ] 🔴 **시도할 횟수 입력**
  - [x] 🔴 `시도할 횟수는 몇 회인가요?\n` 출력, 입력받고 저장
  - [ ] 🟡 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션 종료
    - [ ] 🟡 횟수 양수 검증

## 자동차

- [x] 🔴 **자동차는 전진 또는 멈출 수 있다.**
  - [x] 🔴 0에서 9 사이에서 무작위 값을 구하기
  - [x] 🔴 무작위 값이 4 이상인 경우 전진
  - [x] 🔴 무작위 값이 4 미만인 경우 멈춤

## 경주 게임

- [x] 🔴 **입력받은 횟수만큼 경주 게임을 반복**
  - [x] 🔴 입력받은 횟수만큼 게임 실행
  - [x] 🔴 입력받은 횟수만큼 N대의 자동차는 전진 또는 멈춤
- [x] 🔴 **자동차 경주 게임을 완료한 후 우승자 구하기**
  - [x] 🔴 가장 멀리 간 사람들 구하고 배열에 저장

## 출력

- [x] 🔴 **차수별 실행 결과 출력 이전 "\n실행 결과" 출력**
- [x] 🔴 **차수별 실행 결과 출력**
  ```bash
  ${이름1} : ${"-"*이동거리}
  ${이름2} : ${"-"*이동거리}
  ${이름3} : ${"-"*이동거리}
  ```
- [x] 🔴 **차수별 실행 결과 출력 이후 개행 출력**
- [x] 🔴 **자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.**
  - [x] 🔴 단독 우승자 안내 문구 출력
    ```bash
    최종 우승자 : ${이름}
    ```
  - [x] 🔴 공동 우승자 안내 문구 출력
    - [x] 🔴 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분
    ```bash
    최종 우승자 : ${이름1}, ${이름2}
    ```

# 리팩터링 목록

- [x] 자동차 객체를 배열로 변경
- [x] RacingGame 문자열이 아닌 배열을 생성자로 받음