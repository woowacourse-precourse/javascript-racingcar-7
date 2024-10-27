# javascript-racingcar-precourse

# 자동자 경주

기능 요구 사항

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

### 입출력 요구 사항

#### 입력

- 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)

```
pobi,woni,jun
```

- 시도할 횟수

```
5
```

#### 출력

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

- 실행 결과 예시

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

## 기능 목록별 설명

1주차에서와 비슷하게 class를 따로 만들어서 구현할 것이다
**Car** 클래스와 **Racing** 클래스를 만들어서 별도로 관리한다.

### Car Class

- name과 distance를 가진다. 각각, 자동의 이름과 현재 거리를 저장하며, distance의 초기값은 0이다.
- 함수 목록

  1. **generateRandomNumber()**

     - 0~9사이의 난수 생성

  2. **canMoveForward(randomValue)**

     - randomValue가 4보다 큰지 판단
     - 4보다 크면 true, 아니면 false

  3. **move()**

     - generateRandomNumber()로 난수를 생성한 뒤 canMoveForward(randomValue)의 반환값이 true면 distance에 1을 더한다.

  4. **getDistance()**

     - 현재 자동차의 거리를 반환

  5. **getName()**
     - 자동차의 이름을 반환

### Race Class

- Car 객체들을 배열로 가지고 시도 횟수(tries)를 가진다.
- 함수 목록

  1. **splitInputByComma(input)**

     - 쉼표(,)를 기준으로 문자열을 나눠 배열을 반환

  2. **isValidCarNameLength(carName)**

     - carName이 5자 이하인지 확인
     - 5자 이하이면 true, 초과하면 에러 throw

  3. **getValidCarNames(input)**

     - splitCarNamesByComma(input) 함수와 isValidCarNameLength(carName)함수를 사용하여 조건에 맞는 자동차의 이름의 배열(cars)만 반환

  4. **convertToNumber(tries)**
     - tries 변수를 숫자로 변환한다.
     - 변환 후에 Nan이나 음수값이 나오면 에러 반환
  5. **start()**

     - race를 시작하는 함수
     - 시도 횟수만큼 for문을 실행하여 각 자동차의 움직임을 출력한다.

  6. **printRaceResult()**

     - 각 시도횟수마다 race의 결과를 출력해주는 함수

  7. **getWinners()**

     - 시도 횟수만큼 모두 진행한 후 각 자동차들의 거리 중 최대 값을 구한다.
     - 거리가 최대값에 해당하는 자동차의 배열 반환

  8. **printWinners()**

     - getWinners()를 통해 얻는 자동차의 이름 출력
