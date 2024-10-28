# 자동차 경주

## 구현할 기능 목록

### 입출력

- [x] 경주할 자동차 이름을 입력받는 기능
  - [x] 유효한 자동차 이름이 아닐 경우 에러 처리
    - [x] 자동차 이름은 쉼표(,)를 기준으로 분리
    - [x] 자동차 이름은 5자 이하만 가능
- [x] 시도할 횟수를 입력받는 기능
  - [x] 유효한 횟수가 아닐 경우 에러 처리
- [ ] 차수별 실행 결과를 출력하는 기능
- [ ] 우승자를 출력하는 기능
  - [ ] 우승자가 여러명일 경우 쉼표(,)를 이용하여 구분

### 기능

- [ ] 사용자가 입력한 횟수 만큼 자동차 경주를 진행
  - [x] 각 자동차의 전진 여부를 결정
    - [x] 각 자동차에 대해 0에서 9사이의 무작위 값을 계산
    - [x] 무작위 값이 4 이상이라면 전진
    - [x] 무작위 값이 4 미만이라면 멈춤
  - [x] 계산한 전진 여부에 따라 각 자동차를 전진시킴
- [ ] 모든 경주를 진행했다면 가장 많이 전진한 자동차를 계산
  - [ ] 해당 자동차를 우승자로 선정
  - [ ] 전진 횟수가 같다면 해당 자동차 모두를 우승자로 선정

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

## 입출력 요구 사항

### 입력

- 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)

```
pobi,woni,jun
```

- 시도할 횟수

```
5
```

### 출력

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

### 실행 결과 예시

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
