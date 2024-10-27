# javascript-racingcar-precourse

## 기능 구현 목록

### 1. 자동차 list와 횟수 입력 받기

- [ ] input으로 자동차와, 횟수를 입력 받는다. (배열로 입력을 받는다.)

### 2. 입력 값 확인

- 자동차 이름
  - [ ] 5글자 이상이면 Error 반환
  - [ ] 빈 문자열이 있으면 Error 반환
  - [ ] 같은 이름이 있으면 Error 반환
- 횟수
  - [ ] 0이면 Error 반환
  - [ ] 정수로 변환될 수 없으면 Error 반환

### 3. 난수 생성 후 자동차 이동 (반복)

- [ ] 자동차 수만큼 난수 생성
- [ ] 생성된 난수가 4 이상이면, 자동차는 전진

### 4. 우승자 출력

- [ ] 자동차의 거리를 계산하여, 최댓값을 가지는 자동차를 winner로 출력한다.
- [ ] 우승자가 없는 경우(난수가 0인 경우) 에는 Error 반환

## Error check

`InvalidNameError` : “[ERROR] 유효하지 않은 자동차 이름입니다.”

`EmptyNameError` : “[ERRPR] 자동차 이름은 공백일 수 없습니다.”

`SameNameError` : “[ERROR] 같은 이름이 2개 이상 존재합니다.”

`ZeroRoundError` : “[ERROR] 진행할 횟수는 1 이상 이어야 합니다.”

`InvalidRoundError` : “[ERROR] 횟수 입력이 잘못되었습니다.”

`NoWinnerError` : “[ERROR] 경주의 우승자가 존재하지 않습니다.”

## 디렉토리 구조
