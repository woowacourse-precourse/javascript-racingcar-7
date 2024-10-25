# javascript-racingcar-precourse

## 코드 유의 사항

- [] 들여쓰기(indent) depth는 2까지만 허용한다.
- [] 3항 연산자는 사용 불가능하다.
- [] 함수를 최대한 작게 만들어라.
- [] Jest를 이용해 정리한 기능 목록이 정상 작동하는지 테스트 코드로 확인하라.

## 기능 구현 목록

### 입력 부분(inputView)

- [x] `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)` 문구를 출력한다.
- [x] 문구 출력과 동시에 경주할 자동차 이름을 입력받는다.
- [x] `시도할 횟수는 몇 회인가요?` 문구를 출력한다.
- [x] 문구 출력과 동시에 시도할 횟수를 입력받는다.
- [x] 경주할 자동차 이름이 올바른 형식으로 구성된 것인지 검증한다.
- [x] 시도할 횟수가 올바른 형식으로 구성된 것인지 검증한다.

### 출력 부분(outputView)

- [x] `실행 결과` 문구를 출력한다.
- [x] `${경주할 자동차 이름}: ${각 자동차의 전진 횟수에 따른 막대기 바(-)}` 문구를 출력한다.

  -[x] 경주할 자동차를 입력받은 순서대로 각 자동차별로 위의 문구를 출력한다.

- [x] `최종 우승자 : ${우승자}` 문구를 출력한다.
  - [x] 우승자가 다수라면 쉼표(,)를 포함하여 나열한다.

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

### 기능 수행 부분

- [x] 한 번의 횟수에서 각 자동차에게 무작위 값을 할당한다.
- [x] 한 번의 횟수에서 각 자동차에게 할당된 무작위 값에 따른 전진 여부를 결정한다.
  - [x] 4 미만: 정지한다.
  - [x] 4 이상: 전진한다.

## 예외 처리 목록

`[Error]`를 포함한 예외 발생 메시지를 출력하며, 애플리케이션을 종료한다.

- [x] 경주할 자동차 이름의 구분자가 쉼표가 아닌 다른 구분자로 구성된 경우
- [x] 경주할 자동차 이름이 하나만 입력된 경우
- [x] 경주할 자동차 이름이 공백인 경우
- [x] 경주할 자동차 이름이 5자 초과인 경우
- [x] 시도할 횟수가 양수가 아닌 0 또는 음수 또는 문자로 구성된 경우

## 테스트 목록

### 올바른 기능 수행

- [] 한 횟수의 각 자동차에게 4 이상의 값이 할당되면 전진하는 경우
- [] 한 횟수의 각 자동차에게 4 미만의 값이 할당되면 정지하는 경우
- [] 우승자가 한 명인 경우
- [] 우승자가 다수인 경우

### 예외 발생 처리

- [] 경주할 자동차 이름의 구분자가 쉼표가 아닌 다른 구분자로 구성된 경우
- [] 경주할 자동차 이름이 하나만 입력된 경우
- [x] 경주할 자동차 이름이 5자 초과인 경우
- [] 경주할 자동차 이름이 공백인 경우
- [] 시도할 횟수가 양수가 아닌 경우
  - [] 0
  - [] 음수
  - [] 문자
