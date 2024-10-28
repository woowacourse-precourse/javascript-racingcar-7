# javascript-racingcar-precourse
# 기능 목록
## 사용자 입력 처리 함수
### 1. 경주할 자동차 이름 입력
- 이름은 5자 이하이며, 영어, 숫자 외에 공백, 특수 문자를 허용하지 않습니다.
- 동일한 닉네임은 허용하지 않습니다.
- 쉼표(,)로 구분하여 이름을 저장합니다.
- 인원수에 제한은 없습니다.
```javascript
// 프롬프트 메시지 출력 및 사용자 입력 받아 해당 문자열 반환
function inputCarsNameWithDelimeter() {}

// INPUT: 입력 받은 문자열
// OUTPUT: 경주할 자동차 목록
function splitCarsName(inputString) {}

// INPUT: 경주할 자동차 목록
// OUTPUT: 자동차 이름이 중복되지 않으면 true, 중복된 이름이 존재하면 false 반환
function checkNameUnique(cars) {}

// INPUT: 경주할 자동차 목록
// OUTPUT: 자동차 닉네임이 유효하면 true, 유효하지 않으면 false 반환
function checkNameValid(cars) {}
```
- 입력 - 이름 분리 - 유효성 검증 (유일, 이름 규칙 검사) 절차로 수행합니다.
- 유효성 검증에서 false가 반환 시, Error 메시지를 반환합니다.
### 2. 시도할 횟수 입력
- 최소 1 이상 숫자가 입력되어야 하며, 그렇지 않은 경우 사용자에게 올바른 값을 받을 때까지 입력 받습니다.
```javascript
// 프롬프트 메시지 출력 및 사용자 입력 받아 해당 숫자 반환
function inputTrialNumber() {}

// INPUT: 입력 받은 숫자
// OUTPUT: 숫자가 1 이상인 경우 true, 아닌 경우 false 반환
function isNumberValid(inputNumber) {}
```
## 차수별 실행 결과 출력 함수
- 닉네임 : 전진 칸수 형식으로 출력합니다.
- 전진 칸수는 `-` 문자를 이용해 표현합니다.
```javascript
// INPUT: 입력 받은 숫자 (경기 진행 횟수), 자동차 목록
// OUTPUT: 게임 진행 결과 반환 (gameResult)
function playGame(inputNumber, cars) {}

// INPUT: 경기 진행 현황
// 경기 진행 과정 출력
function printCurrentResult(gameResult) {}
```
## 이동 진행
- 랜덤 숫자 값에 따라 전진 혹은 정지를 수행합니다.
- 0~3: 정지
- 4~9: 전진
```javascript
// 랜덤 숫자에 따라 전진해야 하는 경우 true를 반환합니다.
function shouldMoveForward() {}

// INPUT: 현재 자동차 진행 정보
// OUTPUT: 갱신된 자동차 진행 정보 (carInfo)
function updateCarPosition(carInfo) {}
```
## 우승자 출력
- 최종 우승자 명단을 쉼표(,)로 구분하여 출력합니다.
```javascript
// INPUT: 자동차 경기 진행 현황
// OUTPUT: 우승자 명단 (winners)
function findWinners(gameResult) {}

// INPUT: 우승자 명단
// 우승자 이름을 쉼표(,)로 구분하여 출력
function printWinners(winners) {}
```