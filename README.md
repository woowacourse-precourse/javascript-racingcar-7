# javascript-racingcar-precourse

## 기능 요구 사항

초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

### 입출력 요구 사항

입력

- 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)

```
pobi,woni,jun
```

- 시도할 횟수

```
5
```

출력

- 차수별 실행 결과

```
pobi : --
woni : ----
jun : ---
```

- 단독 우승자 안내 문구

```
최종 우승자 : pobi
```

- 공동 우승자 안내 문구

```
최종 우승자 : pobi, jun
```

실행 결과 예시

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

## 구현 기능 목록

### 입출력

- [x] 자동차 이름을 입력받는다.

  - [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
  - [x] 이름이 5자 이상 일시 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨다.
  - [x] 이름이 1자 미만 일시 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨다.

- [x] 시도할 횟수를 입력받는다.

  - [x] 숫자가 아니라면 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨다.
  - [x] 1 미만이라면 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨다.

- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 결과를 출력한다.
  - [x] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

### 자동차

- [x] 각 자동차에 이름을 부여할 수 있다.
- [x] 자동차는 전진 또는 멈출 수 있다.

### 경주 게임 주최

- [x] 입력받은 자동차 이름과 횟수로 경주를 진행한다.

  - [x] 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우 전진한다.

    - [x] Random.pickNumberInRange() 활용
    - [x] 전진 시 진행 정도를 나타내는 속성값을 +1 한다.

  - [x] 전진 여부에 상관없이 경주 게임의 회차마다 각 자동차들의 이름과 함께 진행 정도를 -로 출력한다.

- [x] 우승자를 뽑는다.
  - [x] 진행 회차 중 마지막 회차에서 자동차 객체의 step속성이 가장 큰 자동차를 우승자로 할당한다.

### 추가적인 예외처리

- [x] 자동차 이름 입력은 빈값이 올 수 없다.
- [x] 시도 횟수 입력은 빈값이 올 수 없다.
- [x] 자동차 이름 입력에서 특수문자는 이름을 구분하는 기준인 쉼표(,)만 허용된다.
