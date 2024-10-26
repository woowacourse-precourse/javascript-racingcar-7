# javascript-racingcar-precourse

## 진행 순서도

- [ ] 게임 시작
    - **[ 출력 ]** 사용자에게 `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)` 문구를 출력해준다.
    - **[ 입력 ]** 사용자가 경주할 자동차 이름을 입력한다.
    - **[ 출력 ]** 사용자에게 `시도할 횟수는 몇 회인가요?` 문구를 출력한다.
    - **[ 입력 ]** 사용자가 시도할 횟수를 입력한다.
        - **[ 검증 ]** 시도할 횟수가 1 이상인지 확인한다.
- [ ] 자동차 경주 진행
    - **[ 기능 ]** 사용자의 입력값으로 부터 이름을 추출한다.
        - **[ 검증 ]** 이름이 5글자 이하인가?
    - **[ 기능 ]** 사용자가 요청한 횟수만큼 세트를 반복한다.
        - **[ 기능 ]** 0~9 사이의 무작위 값을 생성해 조건에 부합시 해당 자동차의 포인트를 +1 한다.
            - **[ 검증 ]** 무작위 값이 4 이상인가?
        - **[ 출력 ]** 한 세트가 끝날때마다 해당 선수가 가지고 있는 point만큼 `-`를 출력한다.
- [ ] 우승 자동차 선정
    - **[ 기능 ]** 자동차들을 point에 따라서 내림차순으로 정렬한다.
        - **[ 검증 ]** n과 n+1 순서의 자동차의 점수가 같은가?
- [ ] 게임 종료
    - **[ 출력 ]** 사용자에게 `최종 우승자 : {우승 자동차}` 문구를 출력한다.

## 구현할 기능 목록
> 각 타이틀은 기능 분류 정도로 생각해주시면 됩니다.

### App

- [x] 자동차 경주 게임을 실행시킨다.

### ViewIn

- [x] 사용자에게 `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)` 메시지를 출력한다.
- [x] 사용자에게 `시도할 횟수는 몇 회인가요?` 메시지를 출력한다.

### ViewOut

- [ ] 각 자동차의 현재 위치를 `-`로 표시하여 출력한다.
- [ ] 우승자 이름들을 쉼표로 구분하여 `최종 우승자 : pobi, crong` 형식으로 출력한다.

### Car

- **속성**
  - `name`: 자동차 이름
  - `points`: 전진한 횟수
- **기능**
  - [ ] 랜덤 숫자가 전진 기준 숫자(예: 4) 이상인 경우 `points`을 1 증가시킨다.
  - [ ] 자동차의 이름을 반환한다.
  - [ ] 자동차의 현재 위치를 반환한다.

### Race

- **속성**
  - `cars`: `Car` 객체들의 리스트
  - `count`: 시도 횟수
- **기능**
  - [ ] `count`만큼 게임을 진행한다.

### Validator

- [ ] 입력된 자동차들의 이름이 빈 값인지 검증한다.
- [ ] 각 이름이 최대 이름 길이(예: 5글자) 이하인지 검증한다.
- [ ] 시도 횟수가 1 이상인지 검증한다.

### Winner

- [ ] `cars` 리스트를 받아 가장 높은 `points` 값을 가진 자동차(들)을 찾아낸다.
- [ ] 우승자 이름들의 리스트를 반환한다.

### RandomGenerator

- [ ] 0~9 사이의 무작위 값을 생성하여 반환한다.

### Parser

- [x] 입력된 문자열을 쉼표 기준으로 분리하여 자동차 이름의 리스트로 반환한다.

### Constants

- [ ] 게임에서 사용되는 상수값들을 관리한다.
