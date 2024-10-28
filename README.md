# javascript-racingcar-precourse

## 기능 구현 목록

### 1. 자동차 list와 횟수 입력 받기

- [x] 자동차와, 횟수를 입력 받는다.

### 2. 입력 값 확인

- 자동차 이름
  - [x] 5글자 이상이면 Error 반환
  - [x] 빈 문자열이 있으면 Error 반환
  - [x] 같은 이름이 있으면 Error 반환
- 횟수
  - [x] 0이면 Error 반환
  - [x] 정수로 변환될 수 없으면 Error 반환

### 3. 난수 생성 후 자동차 이동 (반복)

- [x] 자동차 수만큼 난수 생성
- [x] 생성된 난수가 4 이상이면, 자동차는 전진

### 4. 우승자 출력

- [x] 자동차의 거리를 계산하여, 최댓값을 가지는 자동차를 winner로 출력한다.
- [x] 우승자가 없는 경우(난수가 0인 경우) 에는 Error 반환

## Error check

`InvalidNameError` : “[ERROR] 자동차 이름은 5글자 이하입니다.”

`EmptyNameError` : “[ERRPR] 자동차 이름은 공백일 수 없습니다.”

`SameNameError` : “[ERROR] 같은 이름이 2개 이상 존재합니다.”

`ZeroRoundError` : “[ERROR] 진행할 횟수는 1 이상 이어야 합니다.”

`NegativeRoundError` : "[ERROR] 횟수는 양수여야 합니다."

`InvalidRoundError` : “[ERROR] 횟수 입력이 잘못되었습니다.”

`NoWinnerError` : “[ERROR] 경주의 우승자가 존재하지 않습니다.”

## 디렉토리 구조

src<br/>
├── App.js<br/>
├── errorMessages.js<br/>
├── handleInput.js<br/>
├── game<br/>
│ 　　 ├── initRacing.js<br/>
│ 　　 ├── startRacing.js<br/>
│ 　　 └── updateCarDistance.js<br/>
└── result<br/>
　　　　 ├── printRacing.js<br/>
　　　　 └── printWinner.js<br/>

`errorMessages.js` : 모든 Error 문구를 상수화하여 저장<br/><br/>
`handleInput.js` : 입력값에 대한 유효성 검사 수행 & error 반환<br/><br/>
`initRacing.js` : round, carNames, carDistances를 세팅<br/><br/>
`startRacing` : 주어진 라운드 만큼 racing 진행<br/><br/>
`updateCarDistance.js` : 난수에 따라 각 자동차의 거리를 업데이트<br/><br/>
`printRacing.js` : 라운드별 자동차 위치 출력<br/><br/>
`printWinner.js` : 최종 우승자 출력<br/><br/>
