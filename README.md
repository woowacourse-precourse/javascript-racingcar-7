# javascript-racingcar-precourse
## 🚀 요구 사항 분석
### 시작하기

- [x]  요구사항 분석하기 `README`
- [x]  constant 작성하기 `constant`

### 입력받기 `input`

- [x]  사용자에게 입력받는 함수 구현하기
- [x]  사용자에게 자동차 이름 입력받기
- [x]  입력받은 값 쉼표(,) 기준으로 구분하기
- [x]  시도할 횟수 입력받기

### 출력하기 `output`

- [x]  출력하는 함수 구현하기
- [x]  실행 결과 출력하기
- [x]  최종 우승자 출력하기

### 게임하기 `game`

- [x]  0~9 무작위값 구하기
- [x]  전진 가능한지 확인하기
- [x]  실행 횟수만큼 실행하기
- [x]  최종 우승자 구하기

### 입력값 예외 처리하기 `error`

- [x]  입력값이 없는 경우
- [x]  이름이 5자 이하가 아닐 경우
- [x]  자동차 이름이 중복될 경우
- [x]  시도 횟수가 양수가 아닐 경우

<br/>

## 🚨 체크리스트
- [x]  JavaScript Code Conventions 을 준수하였는가?
- [x]  한 메서드에 오직 한 단계의 들여쓰기만 허용했는가?
- [x]  else 예약어를 쓰지 않았는가?
- [x]  모든 원시값과 문자열을 포장했는가?
- [x]  3개 이상의 인스턴스 변수를 가진 클래스를 구현하지 않았는가?
- [x]  getter/setter 없이 구현했는가?
- [x]  메소드의 인자 수를 제한했는가?
- [ ]  코드 한 줄에 점(.)을 하나만 허용했는가?
- [x]  메소드가 한가지 일만 담당하도록 구현했는가?
- [x]  클래스를 작게 유지하기 위해 노력했는가?
- [x]  3항 연산자를 사용하지 않았는가?
- [x]  AngularJS Commit Conventions 에 맞춰 Commit Message를 작성했는가?
- [x]  이름을 축약하지 않고 의도를 잘 드러냈는가?
- [x]  JavaScript API를 적극 활용했는가?
- [x]  Jest를 활용해 테스트 코드로 작동을 확인했는가?
- [x]  테스트 코드를 관심사별로 분리했는가?

<br/>

## 📄 폴더구조
```
📦 __tests__
 ┗━ 📜ApplicationTest.js
📦 src
 ┣━ 📜App.js
 ┣━ 📜index.js
 ┣━ 📂util
 ┃   ┣━ 📜io.js
 ┃   ┣━ 📜pickRandomNumberInRange.js
 ┃   ┣━ 📜printSimulate.js
 ┃   ┗━ 📜splitByComma.js
 ┣━ 📜Simulator.js
 ┣━ 📜Validator.js
 ┗━ 📜constant.js
```