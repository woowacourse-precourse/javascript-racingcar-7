# javascript-racingcar-precourse

## 기능 구현 목록

### 1. 경주할 자동차 이름 입력받기

1. 아래처럼 자동차 이름을 입력받는다.
```javascript
pobi,woni,jun
```
1.  ','로 구분된 배열로 만든다.
2. 배열의 길이가 2미만일 시 에러를 발생시킨다.
3. 빈 문자열이 있을 시 에러를 발생시킨다.
4. 이름이 5자 초과 시 에러를 발생시킨다.
5. 같은 이름이 있을 경우 에러를 발생시킨다.

*공백도 문자에 포함한다.

### 2. 시도할 횟수 입력받기

1.숫자로 변환되지 않는다면 에러를 발생시킨다.
2.실수로 변환했을 때 정수가 될 수 없다면 에러를 발생시킨다.
3.시도 횟수가 1미만이면 에러를 발생시킨다.

## 3. 랜덤수 생성 및 검증
1. <code>MissionUtils.Random.pickNumberInRange</code>로 자동차 수만큼 무작위 수를 생성한다.
2. 무작위 수가 4이상일 때, <code>moveForwardCountArray</code>리스트에 해당하는 원소에 카운트를 증가시킨다.
3. 자동차 이름과 더해진 카운트 곱하기 <code>-</code>의 결과를 출력한다.
4. 1~3의 과정을 시도횟수만큼 반복한다.

## 4. 우승자 구하기

### 4-1. 우승한 자동차 이름 탐색
1. 전진 횟수를 저장하는 <code>moveForwardCountArray</code>에서 최대값을 구한다.
2. 반복문을 돌며 <code>moveForwardCountArray</code>에서 최대값과 일치하는 index를 <code>maxWinnerIndexArray</code>에 저장한다.
3. <code>maxWinnerIndexArray</code>에서 우승자 이름(자동차이름)을 추출해 <code>WINNER_ARRAY</code>에 저장한다.

### 4-2. 최종 우승자 구하기
1. 만약 <code>WINNER_ARRAY</code>가 비어있다면 우승자가 없다는 에러를 던진다.
2. 있다면 쉼표를 구분자로 하여 문자열리스트를 합친다.

## 5. 결과 출력
1. 최종 우승자를 출력한다.
```javascript
최종 우승자 : pobi, jun
```
2. 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.