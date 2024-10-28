# 자동차 경주

초간단 자동차 경주 게임입니다.

## 목차

1. [미션 접근하기](#미션-접근하기)
2. [기능 목록](#기능-목록)
3. [데이터 목록](#데이터-목록)
4. [세부 계획](#세부-계획)

<br>

## 미션 접근하기

**미션 분석**

- 사용자가 입력한 이름의 수만큼 자동차가 생성된다. 각 자동차는 독립적으로 전진 또는 정지한다. 자동차가 움직이는 조건은 무작위로 정해지며 마찬가지로 자동차마다 독립적으로 적용된다.

- 사용자가 결정하는 것은 자동차의 이름과 갯수, 경주를 시도하는 횟수이다. 그 외는 프로그램이 결정한다.

- 이를 종합하면, 경주에 참여하는 자동차는 개별적인 이름과 이동 정보를 갖는다. 따라서 구조는 동일하더라도 서로 다른 value를 가질 수 있는 데이터로 자동차를 표현해야 한다.

- 우승자를 가리기 위해 각 자동차의 이동 정보를 비교할 수 있는 기능이 필요해 보인다. 또한 정해진 횟수만큼 반복하여 무작위로 자동차를 움직이는 기능도 필요하다.

<br>

**미션 프로그램의 흐름**

- 기능 요구 사항과 분석 내용을 토대로 한 프로그램의 흐름은 다음과 같다.

`시도 횟수` → `경주 반복 실행` → `매 반복마다 무작위로 전진/정지`, `매 반복마다 이동 정보 출력`

`자동차 이름` → `자동차 데이터 생성` → `매 반복마다 이동 정보 업데이트` → `가장 멀리 이동한 자동차 찾기` → `가장 멀리 이동한 자동차 출력`

<br>
<br>

## 기능 목록

### 자동차

**1. 자동차 데이터를 생성하는 기능**

- 이름을 인자로 받아 자동차 객체를 생성한다.

**2. 이동 거리를 업데이트하는 기능**

- 랜덤으로 0 ~ 9 사이의 값을 뽑아 4 이상일 경우 전진한다.
  - 랜덤 메서드는 우아한테크코스의 라이브러리를 이용한다.
- 이동 거리를 업데이트한다.

<br>

### 경주 실행

**1. 이동을 시도하는 기능**

- 시도 횟수를 인자로 받아, 자동차의 이동을 시도한다.

**2. 우승자 출력 기능**

- 가장 이동 거리가 먼 자동차의 이름을 출력한다.

**3. 이동 거리를 비교하는 기능**

- 경주에 참여한 자동차들의 이동 거리를 비교하여 가장 큰 값을 판별한다.

<br>

### 입출력

> 출력은 우아한테크코스 라이브러리(Console)를 이용한다.

**1. 사용자의 입력값을 받는 기능**

- 사용자에게 자동차 이름과 이동을 시도할 횟수를 입력받는다.

- 형식에 대한 예시는 다음과 같다.
  - 이름: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`
  - 시도 횟수: `시도할 횟수는 몇 회인가요?`

**2. 결과를 출력하는 기능**

- 경주가 끝날 때마다 자동차의 이동 거리 현황을 출력한다.

- 모든 경주가 완료되면 우승자를 출력한다.

- 형식에 대한 예시는 다음과 같다.
  ```
  pobi : -----
  woni : ----
  jun : -----
  ```
  ```
  최종 우승자 : pobi, jun
  ```

<br>

### 예외 처리

> 예외가 발생하면 프로그램을 종료한다.

**1. 자동차 이름**

- 각 자동차 이름은 1자 이상 5자 이하의 문자열이다.
- 자동차 이름은 구분자를 쉼표(,)로 하는 string 데이터이다.
- 자동차 이름은 중복될 수 없다.
- 자동차 이름에 들어가는 쉼표(,)는 구분자로 간주한다.

**2. 시도 횟수**

- 시도 횟수는 자연수다.

<br>
<br>

## 데이터 목록

**1. 자동차 이름**

- string
- 쉼표(,)로 구분되어 input 값으로 넘어옴.

**2. 시도 횟수**

- number
- string 타입으로 input 값으로 넘어옴.

**3. 자동차**

- Object
- 이름, 이동 거리를 속성으로 가짐.

**4. 우승자**

- Object
- 이동 거리가 가장 먼 자동차 데이터

<br>
<br>

## 세부 계획

**구현 우선순위**

1. 자동차 기능
2. 경주 기능
3. 입출력 기능
4. 예외 처리

<br>

- 우선순위는 기능의 중요도를 기준으로 정하였다. 경주를 시도하려면 경주에 참여하는 자동차가 필요하다. 이러한 의존 관계가 명확하기 때문에 자동차 기능 구현을 최우선 순위로 두었다.  
  그다음으로 프로그램의 핵심 기능인 경주를 2순위, 나머지 입출력과 예외 처리를 3, 4순위로 결정했다.

<br>

**시간 계획**

1. 자동차 기능 - 1시간

2. 경주 기능 - 1시간

3. 입출력 기능 - 30분

4. 예외 처리 - 2시간

<br>

- 지난 미션과 동일하게, 미션의 기한과 개인적으로 생각하는 난도를 고려하여 시간을 배분하였다.

- 지난 미션과 비교했을 때 입력값의 조건은 간단하다. 그러나 앞서 정리한 것 외에 추가로 고민해 볼 시간이 필요하다고 생각하므로 예외 처리에 투자하는 시간은 동일하게 2시간으로 설정했다.
