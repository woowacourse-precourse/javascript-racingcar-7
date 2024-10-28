# javascript-racingcar-precourse

## 목차

[1. 기능 및 입출력 요구사항](#1-기능-및-입출력-요구사항) <br>
[2. 요구사항 추가정의](#2-요구사항-추가정의) <br>
[3. 예외 처리](#3-예외-처리) <br>
[4. 기능 요구 사항](#4-기능-요구-사항) <br>
&ensp;&ensp;&ensp;[4.1. 동작 순서](#동작-순서-별-기능-요구-사항-commit-단위) <br>
&ensp;&ensp;&ensp;[4.2. 객체](#객체-별-기능-요구사항) <br>

## 1. 기능 및 입출력 요구사항

초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

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

## 2. 요구사항 추가정의

| Data Type   | 조건                                           |
| ----------- | ---------------------------------------------- |
| 자동차 이름 | 1) Range : 1 ≤ N ≤ 10,000                      |
|             | 2) 공백은 받아주지 않는다                      |
|             | 3) 중복을 허용하지 않는다                      |
|             | 4) 특수문자, 숫자도 포함 가능하다              |
| 경기 횟수   | 1) Range : 1 ≤ N ≤ 최대숫자                    |
|             | 2) 숫자만 가능하며 공백 입력은 허용하지 않는다 |

## 3. 예외 처리

| No  | Data Type   | 상황                               | 에러 메세지                                                                      | 유효성 검사 시점    |
| --- | ----------- | ---------------------------------- | -------------------------------------------------------------------------------- | ------------------- |
| 1   | 자동차 이름 | 입력이 null 또는 undefined         | 입력 오류가 발생했어요.                                                          | Input 직후          |
| 2   |             | 자동차 리스트 문자열에 공백이 포함 | 입력시 공백(space, ' ')은 허용하지 않아요.                                       | Input 직후          |
| 3   |             | 자동차 개수 == 10,000              | 자동차 이름은 10,000개 이하로 입력되어야 해요.                                   | 자동차 객체 생성 전 |
| 4   |             | 자동차 이름 5자 초과               | 자동차 이름은 5자 이하로 설정되어야합니다. (이름, 글자수 표시)                   | 자동차 객체 생성 전 |
| 5   |             | 자동차 이름 중복                   | 자동차 이름이 중복되었어요! 이름이 중복되지 않게 설정해주세요 (중복된 이름 표시) | 자동차 객체 생성 전 |
| 6   | 경기 횟수   | 입력이 null 또는 undefined         | 입력 오류가 발생했어요.                                                          | Input 직후          |
| 7   |             | 경기 횟수에 공백이 포함            | 공백(space, ' ')은 허용하지 않아요.                                              | Input 직후          |
| 8   |             | 경기 횟수 < 0                      | 음수가 입력 되었어요! 경기 횟수는 1 이상 N 이하로 설정되어야 합니다.             | 경기 횟수 설정 전   |
| 9   |             | 경기 횟수 == 0 :                   | 0이 입력 되었어요! 경기 횟수는 1 이상 N 이하로 설정되어야 합니다.                | 경기 횟수 설정 전   |
| 10  |             | 경기 횟수 > Max                    | 숫자가 너무 큽니다! 경기 횟수는 1 이상 N 이하로 설정되어야 합니다.               | 경기 횟수 설정 전   |
| 11  |             | 경기 횟수가 숫자가 아님            | 경기횟수는 숫자로만 지정해주세요                                                 | 경기 횟수 설정 전   |

## 4. 기능 요구 사항

### 동작 순서 별 기능 요구 사항 (Commit 단위)

**자동차 경기 시작**

- 사용자에게 자동차 리스트와 경기 횟수를 입력받는다.
- 입력받은 데이터의 유효성을 검사한다.

**자동차 정보 관리**

- 자동차 이름을 쉼표로 구분하여 저장한다.
- 자동차 리스트 데이터의 유효성을 검사한다.
- 자동차 정보를 생성한다. (자동차 이름, 주행 거리)

**게임 정보 관리**

- 게임 정보를 저장한다.
- 게임 횟수 유효성을 검사한다.

**경기 진행**

- 자동차 경기를 횟수만큼 수행한다.
- 자동차는 경기가 진행되면 0에서 9사이의 무작위 값을 구한 뒤, 값이 4 이상이면 전진한다.
- 한 자동차의 경기가 끝날 때 마다 자동차의 위치를 출력한다.

**우승자 출력**

- 경기가 완료되면 우승자를 출력한다.

### 객체 별 기능 요구사항

**controller**

- View에게 사용자 데이터를 요청한다.
- 사용자 데이터에 대한 유효성 검사를 한다.
- Model에 사용자 데이터를 전달한다.
- Model에 자동차 경기를 수행 시킨다.
- Model로 부터 받은 자동차의 이름과 위치를 View에게 전달하여 render 요청을 한다.
- Model로 부터 받은 게임 우승자 정보를 View에게 전달하여 render요청을 한다.

**Model**

- 자동차 리스트에 대한 유효성 검사를 한다.
- 자동차 리스트를 저장한다.
- 자동차 경기를 진행한다.
- 각 자동차는 경기가 진행되면, 0에서 9 사이에서 무작위 값을 구한 뒤 무작위 값이 4 이상일 경우 전진한다.
- 자동차를 한칸씩 전진한다.
- 자동차 정보를 controller에게 알려준다.
- 우승자를 계산한다.
- 우승자 정보를 controller에게 알려준다.

**View**

- 사용자에게 자동차 이름 리스트와 경기 횟수를 입력받는다.
- 자동차의 정보와 전진 거리를 출력 한다.
- 우승자를 출력한다.

**Validator**

- [3.예외처리](#3-예외-처리) 항목에 정의된 상황을 구현한다.
