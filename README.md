# 자동차 경주

## 🚗 기능 목록

✔️ 시작

- 경주할 자동차 이름을 입력하라고 알려주는 문구 출력
- 시도할 횟수가 몇번인지 묻는 문구 출력
<br/>
✔️ 입력

- 자동차의 이름과 ‘,’로 이루어진 문자열 입력
- 시도할 횟수 입력
- 예외 처리
    - 자동차의 이름의 길이가 5를 초과할 경우 “[ERROR]”를 출력하고 Error를 발생시킨 후 애플리케이션 종료
    - 시도할 횟수가 숫자가 아닌 다른 값을 입력할 경우 “[ERROR]”를 출력하고 Error를 발생시킨 후 애플리케이션 종료
<br/>
✔️ 자동자 경주

- 입력받은 이름과 이동 횟수를 참가자 객체로 만든다.
- 한 번의 라운드마다 각각의 참가자가 랜덤하게 숫자를 얻는다.
- 만약 얻은 숫자가 4이상이면 이동 횟수를 1씩 늘려준다.
<br/>
✔️ 출력

- “실행 결과” 라는 문구를 출력한다.
- 각 라운드마다 진행한 결과를 “이름 : - * 이동 횟수” 형식으로 출력한다.
- 라운드가 끝난 후 가장 많이 이동한 자동차의 이름을 출력한다. ( 우승자가 여러 명일 경우 ‘,’로 구분한다. )
<br/><br/>
## ✅ 체크리스트

1. 단일 책임 원칙에 기반하여 각 함수는 하나의 기능만 수행하도록 구현한다.<br/>
2. 함수의 indent(인덴트, 들여쓰기) depth는 2까지만 허용한다.<br/>
3. 3항 연산자를 쓰지 않는다.<br/>
4. 프로젝트 상세 설계를 통해 나눈 기능들에 대해 단위테스트를 진행한다. (TDD 방식으로 진행)<br/>
5. 커밋 메세지를 의미있게 작성한다.<br/>
6. 의미 없는 주석을 달지 않는다. (이름을 통해 의미를 나타낸다)<br/>
7. 코드 포매팅을 사용한다.<br/>
8. JavaScript에서 제공하는 API를 적극 활용한다.<br/>
9. PR리뷰를 통해 얻은 피드백 중 하나인 에러 종류에 대한 메세지를 세분화한다.<br/>
10. Airbnb의 자바스크립트 스타일 가이드인 작음따옴표를 사용한다.<br/><br/>

## 📁 폴더구조
<br/>

```
📦src
 ┣ 📂constants
 ┃ ┣ 📜errorConstants.js
 ┃ ┣ 📜inputConstants.js
 ┃ ┗ 📜outputConstants.js
 ┣ 📂controller
 ┃ ┣ 📜Race.js
 ┃ ┗ 📜RaceController.js
 ┣ 📂model
 ┃ ┗ 📜Car.js
 ┣ 📂utils
 ┃ ┣ 📜determineWinners.js
 ┃ ┣ 📜displayRoundResult.js
 ┃ ┣ 📜moveForwardEachCar.js
 ┃ ┗ 📜moveRandomValueBiggerThanFour.js
 ┣ 📂validations
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜eraseWhiteSpace.js
 ┃ ┃ ┣ 📜extractCarName.js
 ┃ ┃ ┣ 📜hasDuplicateName.js
 ┃ ┃ ┣ 📜isInputEmpty.js
 ┃ ┃ ┗ 📜isNameLongerThanFive.js
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜isValidCarName.js
 ┃ ┗ 📜isValidRound.js
 ┣ 📂view
 ┃ ┣ 📜InputView.js
 ┃ ┗ 📜OutputView.js
 ┣ 📜.DS_Store
 ┣ 📜App.js
 ┗ 📜index.js
```
<br/><br/>

## **📥  실행 방법**

1. 레포지토리 클론

```
git clone https://github.com/subsub-e/javascript-calculator-7.git
```

2. 의존성 모듈 설치

```
npm install
```

3. 프로젝트 실행

```
npm run start
```

4. 프로젝트 테스트

```
npm run test
```
<br/><br/>
## 🧑‍💻 필요 개발 환경

✔️ npm ≥ 10.8.2

✔️ node ≥ 20.17.0
<br/><br/>
## 📖 **라이브러리**

- `@woowacourse/mission-utils`에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.
    - Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.
    - 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.