# javascript-racingcar-precourse

사용자 입력에 따른 자동차 경주 게임을 구현합니다.

## 기능 목록

### 입력

- 경주할 자동차 이름을 입력
- 자동차 이름은 쉼표(,)을 기준으로 구분하며 이름은 5글자 이하
- 자동차가 시도할 횟수를 입력받고 이는 무작위 값을 구할 횟수
- 플레이어는 2명 이상, 5명 이하의 조건 추가
- 시도횟수는 최대 10번 조건 추가

### 경주

- 각 자동차는 시도 횟수만큼 무작위 값을 구함
- 0 ~ 9 사이의 숫자가 값으로 정해지고 값이 4 이상이면 자동차가 전진
- 경주 종료 후 가장 많이 전진한 자동차가 우승
- 최종 우승자는 한 명 이상일 수 있음

### 출력

- 자동차가 각 턴마다 전진하는 모습을 출력
- 경주 종료 후 `최종 우승자 : {자동차 이름}` 으로 나타냄

## 유의 사항

- 들여쓰기는 최대 2번까지만 허용됨
- 3항 연산자 사용 X
- 함수나 메서드가 한 가지 기능만 하도록 작게 만들기
- `Jest`를 통해 기능 목록이 정상 작동하는지 테스트 코드로 확인하기
- `@woowacourse/mission-utils`의 `Random.pickNumberInRange()`, `Console.readLineAsync()`, `Console.print()` API릉 사용하여 랜덤값 추출, 사용자 입력 및 출력 구현
