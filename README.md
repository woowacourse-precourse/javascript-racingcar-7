# javascript-racingcar-precourse

1. 핵심 기능(자동차 전진 기능)

- [x] 매개변수
  - [x] n대의 자동차의 정보를 매개변수로 받는다.
  - [x] 시도할 횟수를 매개변수로 받는다.
- [x] 동작 기능
  - [x] 시도할 횟수만큼 반복한다.
  - [x] 시도할 횟수 안에서 자동차 대수만큼 반복한다.
  - [x] 0에서 9 사이에서 무작위 값을 구한다.
  - [x] 무작위 값이 4 이상이면 전진한다. `+1`
  - [x] 무작위 값이 4 미만이면 전진하지 않는다.
- [ ] 경주 기록 기능
  - [ ] 시도할 횟수만큼 반복할 때 n대의 자동차의 정보를 기록한다.
  - [ ] 시도 횟수마다 `\n`으로 시작한 각각의 자동차 정보를 문자열로 더하여 기록한다.
  - [ ] 횟수 당 기록된 문자열을 배열에 넣는다.
  - [ ] 시도할 횟수가 끝나면 횟수마다 기록된 정보를 연결하여 새 문자열로 반환한다.

2. 우승자 결정 기능

- [x] 매개변수
  - [x] 경주(게임)가 끝난 n대의 자동차의 정보
- [x] 필드
  - [x] 우승자와 관련된 정보인 배열이 존재한다.
  - [x] 최댓값 변수가 존재한다.
- [x] 동작 기능
  - [x] 경주(게임)가 끝난 n대의 자동차의 정보를 순회한다.
  - [x] 해당 횟수가 최댓값과 같으면 자동차 이름을 배열에 넣는다.
  - [x] 우승자를 문자열로 반환한다.
    - [x] `,`로 구분하여 연결한 새 문자열을 만든다.
    - [x] 해당 문자열을 반환한다.
