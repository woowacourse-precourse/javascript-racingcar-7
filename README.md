# javascript-racingcar-precourse

# 기능 목록

## 입력

- [ ] 게임에 참여할 두 개 이상의 자동차이름들을 쉼표(,)를 기준으로 구분해 입력받는다.
  - [ ] 잘못된 값 입력시, "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션 종료한다. 잘못된 값은 아래 경우에 해당한다.
    - [ ] 자동차이름을 1개만 입력한 경우
    - [ ] 자동차이름이 6자 초과인 경우
    - [ ] 구분자가 없는 경우
      - [ ] 쉼표가 아닌 구분자가 입력된 경우
    - [ ] 자료형이 문자가 아닌 경우
    - [ ] 문자형이지만, 숫자로 시작하는 경우(eg. "123a")
- [ ] 게임을 시도할 라운드 횟수를 입력받는다.
  - [ ] 잘못된 값 입력시, "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션 종료한다. 잘못된 값은 아래 경우에 해당한다.
    - [ ] 숫자가 아닌 경우
    - [ ] 음수일 경우

## 출력

- [ ] 매 라운드마다 모든 자동차의 전진여부가 결정된 후, 자동차이름과 전진여부(-)를 출력한다.
  - 한 라운드마다 전진 시, '-' 로 표기가 하나씩 늘어난다.
- [ ] 사용자가 입력한 횟수만큼의 라운드가 종료된 후, 우승자를 출력한다.
  - [ ] 우승자가 여러명 일 경우 쉼표(,)로 구분한다.

## 핵심 기능

- [ ] 사용자가 입력한 횟수만큼 라운드를 진행한다.
  - [ ] 매 라운드마다 모든 자동차는 각각 0~9 사이의 무작위 값을 골라주는 함수를 통해 반환된 값이 4 이상인 경우에만 한 칸 `전진`한다.
  - 아닐 경우 아무 일도 일어나지 않는다.
