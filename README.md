# javascript-racingcar(우테코 프리코스 2주차)

##  기능요구사항
- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다
- 사용자는 몇번의 이동을 할 것인지를 입력할 수 있어야 한다
- 전진하는 조건은 0에서 9사이에서 무작위값을 구한 후 무작위 값이 4이상일 경우다
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 프로그래밍 요구 사항
- indent depth는 3이 넘지 않도록 구현한다.
- 3항 연산자를 쓰지 않는다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만든다
- jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.

## 폴더구조
📦src
 ┣ 📂controllers
 ┃ ┗ 📜MainController.js
 ┣ 📂models
 ┃ ┗ 📜decisionFinalWinner.js
 ┣ 📂types
 ┃ ┗ 📜woowacourse-mission-utils.d.ts
 ┣ 📂utils
 ┃ ┣ 📜finalRace.js
 ┃ ┣ 📜makeRandom.js
 ┃ ┣ 📜oneRace.js
 ┃ ┗ 📜parser.js
 ┣ 📂valid
 ┃ ┗ 📜InputValid.js
 ┣ 📂views
 ┃ ┣ 📜InputView.js
 ┃ ┗ 📜OutputView.js
 ┣ 📜App.js
 ┗ 📜index.js

## 설치 및 실행
```
npm install
npm run test
npm run start

#테스트 함수 실행
npx jest

```


### 1. 사용자 입출력
- **기능**: 사용자에게 입력을 받고 이를 반환한다. 
- **함수명**: InputView

### 2. 사용자 입력 유효성 검사
- **기능**: 공백을 받거나, 경기 횟수에 숫자가 아닌 값이나 음수를 받거나, 6자 이상의 선수이름을 받으면 에러 처리
- **함수명**: InputValid

### 3. 경기 횟수1회 당 승자
- **기능**: 선수배열을 순회하며 랜덤하게 숫자를 생성하고 4이상의 숫자가 나온 선수들은 winners배열에 push한다.
- **함수명**: oneRace

### 4. 전체 경기 합산 승자
- **기능**: 경기 횟수만큼 반복문을 돌며 oneRace를 호출하며 경기 횟수마다의 승자를 가르고, winners배열을 순화하며 totalWinner 딕셔너리에 선수 이름을 key값으로, 승리한 횟수를 value로 넣는다.
- **함수명**: decisionFinalWinner

### 5. totalWinner 딕셔너리에서 최종 승리자 가르기
- **기능**: 딕셔너리를 순화하며 valuer가 가장 큰 key값을 추출하여 넣은 배열을 반환한다.
- **함수명**: finalRace
