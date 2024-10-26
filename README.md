# javascript-racingcar-precourse

# 자동차 경주

- 자동차 경주 게임을 만들어보자 !

### 기능 요구사항

자동차는 주어진 횟수동안 n대의 자동차를 전진 또는 멈춘다!

###### 입력

```
method : test
경주할 자동차의 이름을 입력한다 : pobi,woni,jun
시도할 횟수를 입력한다 : 5
```

```
* 주의사항
    1. 자동차의 이름을 부여할 수 있다 .
        -> 자동차의 이름을 부여하지 않을 수 있다
        ** 자동차에 이름을 부여하지 않으면 랜덤으로 이름을 부여하자
        - RANDOM api를 사용한다
    2. 자동차의 이름은 5글자 이하로 한다
    3. 자동차의 이름은 (,) 쉼표로 구분한다
        -> 쉼표의 개수 +1 이 자동차의 개수가 될것
    4. 사용자가 잘못된 입력시 [ERROR]와 함께 종료한다
        -> 이름 : 공백 ~ 5글자 이하
        -> 이름 : 동일한 이름 입력 불가
        -> 횟수 : 양의 정수만 입력 가능
        -> 큰수 입력방지 100000회
        -> 자동차 개수는 10개가 최대
```

###### 출력

```
method : test
차수별로 실행결과를 보여준다 :
pobi : --
woni : ----
jun : ---
자동차 게임 종료 후 누가 우승자인지 말한다 : 최종 우승자 : pobi
공동 우승자가 있을 경우 : 최종 우승자 : pobi, jun
```

```
* 주의사항
    1. 전진하는 조건
        -> 0~9 사이 무작위 값을 추출
        -> 무작위 값이 4 이상일 경우 전진
    2. 우승자는 한명이 아닐 수 있다.
        -> 두명일 수 있음
```

```
<실행 결과 예시>
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

###### 프로그래밍 주의사항

- indent , depth 가 3을 넘지 않도록 하자
  - 매서드를 분리하는 방법으로 뎁스를 줄일것
- 3항 연산자를 사용하지 말것
- jest를 이용해 정리한 기능목록이 작동하는지 확인 할것
- 메소드가 한가지 일만 하도록 최대한 작게 만들것
