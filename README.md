# 2주차 : 자동차 경주

---
## 1. 구현할 기능 목록

---
### 1-1. 주요 클래스
- App.js :
- RacingCar.js : 자동차 객체관리를 위한 클래스


### 1-2. 서브 클래스
- InputHandler.js : 입출력을 제어한다
- ErrorCode.js : 에러 메세지를 담은 클래스
- RacingHelper.js : utility 클래스, 경주에 필요한 static함수를 선언한다

--- 
## App.js
### 1. 입력값 받기
- m : 총 진행횟수
- players : 경주 참가자 n명의 이름을 입력받아 array에 저장
<br/>

### 2. 결과값 계산
#### 2-1. 경주 참가자들의 이름을 통해 RacingCar객체를 생성한다

#### 2-2. m회 반복을 진행한다

#### 2-3. 각 반복에 대하여
- 각 자동차에 대해 Random.pickNumberInRange(0,9)를 이용하여 무작위 값을 구한다
- 무작위 값을 이용해 자동차를 전진시킨다
- 해당 차수의 실행 결과를 형식에 맞추어 출력한다.
#### 2-4. m회 반복이 종료되면, 각 자동차의 최종 distance를 비교하여 내림차순으로 정렬한다
#### 2-5. 정렬된 distance를 이용해, 우승자들을 선정한다

<br/>

### 3. 결과값 출력
- 우승자 안내 문구를 형식에 맞추어(,) 출력한다.

<br/>

---
## RacingCar.js
### 1. 필드값 :
- name : 해당 자동차의 이름
- distState(주행상태): 해당 자동차의 현 주행거리 (string "-"으로 표기)

### 2. getter/setter 설정
### 3. 함수
- goForward(randomNum:number):void : 랜덤한 수를 받아, validation을 판단하여 차를 전진시킨다

--- 
## RacingHandler.js
### 1. 함수
- compareDistance(cars:RacingCar[]):RacingCar[] : 각 racingCar의 distance를 이용해 정렬한 배열을 반환한다.
- findWinners(cars:RacingCar[]):RacingCar[] : 정렬된 cars 배열을 받아, 우승자 배열을 반환한다.

--- 
<br/> 

## 3. 에러 메세지 구체화
[요구 사항]
- 이름을 5자 이상 입력한 경우<br/>

[그 외]
- 이름이 0글자인 경우 ex. pobi,,yj
- 자동차 이름을 중복으로 입력한 경우 ex, pobi, yj, pobi
- 빈값을 입력한 경우 
- 시도 횟수에 0이하의 수를 입력한 경우 
- 시도 횟수에 숫자가 아닌 문자 등을 입력한 경우
