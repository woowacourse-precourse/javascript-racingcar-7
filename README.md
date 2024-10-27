# 🪐우아한테크코스 프리코스 2주차. 자동차 경주

## 📌 기능 요구 사항

초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 🔥 구현 기능 목록

### 1. 입력

- [x] 경주할 자동차 이름 입력 받기
- [x] 입력받은 이름 `,` 기준으로 분리
- [x] 시도할 횟수 입력 받기

### 2. 차수별 실행 결과 출력

- [ ] 각 자동차 별로 0 부터 9 사이의 랜덤값을 구한 후 4 이상일 경우 전진
- [ ] 실행 결과 출력
- [ ] 입력받은 횟수만큼 게임 반복

### 3. 우승자 출력

- [ ] 게임 종료된 후 우승자 출력
- [ ] 우승자 여러 명일 경우 `,` 이용하여 구분

### 4. 에러 처리

- 자동차 이름 입력 시
  - [ ] 6자 이상의 이름이 포함된 경우
  - [ ] 입력값이 없는 경우
  - [ ] 공백 포함된 경우
  - [ ] 쉼포와 쉼표 사이에 이름 없는 경우
  - [ ] 쉼표만 입력한 경우
  - [ ] 중복된 이름이 있는 경우
- 시도할 횟수 입력 시
  - [ ] 숫자가 아닌 경우
  - [ ] 0 또는 음수를 입력한 경우
  - [ ] 입력값이 없는 경우
