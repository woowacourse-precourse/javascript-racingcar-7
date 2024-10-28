# javascript-racingcar-precourse

## 시나리오

1. 대회에 참가하는 자동차의 이름을 입력한다.
2. 각 자동차가 움직일 횟수를 입력한다.
3. 주어진 횟수 만큼 각 자동차가 움직인다.
   1. 랜덤 값을 뽑는다.
   2. 랜덤 값이 4이상인 경우 이동한다.
4. 모든 횟수만큼 이동했을 때, 가장 멀리 이동한 자동차를 선정한다.
5. 우승 자동차의 이름을 출력한다.

<br />

## 구현 사항

### 입력

- [x] 경주할 자동차 이름 입력 ( 이름은 쉼표 기준으로 구분)
  - 예외 케이스
    - [x] 길이가 5자 이상인 이름이 있는 경우 → `benz,carname`
    - [x] 길이가 1자 미만으로 이름을 지정한 경우 → `,bnez`
    - [x] 자동차가 2대 이상 입력되지 않은 경우 → `benz`
    - [x] 아무 이름도 들어오지 않았을때 → `''`
    - [x] 같은 이름이 들어오는 경우 → `benz,benz`
- [x] 시도할 횟수 입력
  - 예외 케이스
    - [x] 숫자 외 다른 값이 입력되는 경우 -> `k`
    - [x] 음수가 입력되는 경우 -> `-1`
    - [x] 정수가 아닌 다른 수가 들어오는 경우 -> `1.1`

### 출력

- [x] 차수별 실행 결과 출력
- [x] 단독 우승자 안내 문구
- [x] 공동 우승자 안내 문구
  - [x] 우승자는 ,로 구분

### 기능 동작

- [x] 이동
  - [x] 주어진 횟수 동안 입력받은 자동차들이 각각 이동한다.
  - [x] 랜덤 값을 뽑고, 랜덤 값이 4 이상인 경우 이동한다.

### 에러

- [x] 잘못된 값을 입력한 경우 `[ERROR]` 로 시작하는 메세와 함께 Error를 발생시키고 애플리케이션을 종료한다.
