# javascript-racingcar-precourse

# 👩🏻‍💻 1. 과제 풀이

## 1.1 프로그램 동작 흐름

이번 과제에서는 함수가 한 가지 일만 하도록 최대한 작게 만들라는 프로그래밍 요구 사항이 있다. 또한 1주차 공통 피드백에서 자바스크립트의 내장 API를 적극적으로 활용하라는 메세지도 있었다.

이 점을 유의하면서 프로그래밍 하기 위해 만들게될 디렉터리 구조 파악 단계를 추가해보았다. 지난 주차 프리코스에서는 파일 분리를 소극적으로 했었는데, 이번엔 최대한 작게 라는 요구사항을 받았으니 최대한 확장성, 재사용성, 유지보수성이 좋은 코드를 만들고 싶다.

1차적으로 생각해본 프로그램 전체 동작 흐름은 다음과 같다.

App.run()으로 프로그램 시작<br>
->main() 함수 호출<br>
->main.js 시작에 프로그램이 시작되었습니다 출력 프린트<br>
->carNameInput.js 실행(사용자에게 경주할 자동차 이름 입력값을 받는 함수)<br>
->carNameInput.js에서는 입력검증을 해주는 validateInput.js 객체 실행<br>
->검증 통과 후 car 객체의 [name: name, advance: 0] 인스턴스 배열을 carList에 추가하는 createCarList() 실행<br>
->시도할 횟수를 입력 받는 tryNumber.js함수 실행<br>
->tryNumber.js에서는 validateInput.js 객체 실행<br>
->검증 통과 후 isTryNumber 숫자열 반환<br>
->isTryNumber를 인자로 받는 gameController호출<br>
->gameController.js는 raceController.js를 isTryNumber번 만큼 반복실행<br>
->raceController.js 실행<br>
->raceController.js는 raceRound.js와 resultRound.js 을 carList의 요소를 모두 순회하며 실행<br>
->raceRound.js 함수에서는 car의 각 요소(name별로 만들어진 차들)에 Random.pickNumberInRange() 호출을 통해 값이 4이상일 경우 각 요소에 advanceNumber를 +1 하고 4미만이면 0을 추가함<br>
->resultRound.js에서는 carList의 현재 상태를 [name1: -, name2: --, ...] 형태로 출력<br>
->resultRound.js는 advanceNumber만큼 '-'를 추가하는 generateAdvanceSymbol()과 `${carName}: ${advanceSymbol}` 문자열을 반환하는 formatResultMessage() 함수, printResult()함수 실행<br>
->gameController.js는 반복실행이 끝난 뒤 getIsWinner.js 실행<br>
->getIsWinner.js에서는 현재 carList에서 advanceNumber 속성이 가장 높은 name을 winner.js 객체에 반환. 동점자의 경우엔 동점자를 배열로 반환<br>
->gameController.js 종료<br>
->gameResultController.js 호출<br>
->winner.js 객체 배열을 ', '를 구분자로 문자열 배열 반환시키는 setStringWinner.js 실행<br>
->이어서 printIsWinner.js 호출<br>
->printIsWinner.js는 '최종 우승자 : [winner 문자열 배열]' 출력<br>
->프로그램 종료

일단 최대한 하나의 함수가 하나의 동작만 하도록 프로그래밍하기로 했으므로 게임을 관리하는 로직이 필요할 거 같아서 그렇게 생각하다보니 컨트롤러 개념이 필요할 것 같았고
이 과제는 UI 구현이나 사용자간의 상호작용이 메인이 아닌 게임의 데이터 처리 로직이 중점이므로 이런 경우에는 mvc패턴으로 구현하는 게 효율적이어 보여 MVC 패턴을 모방한 흐름을 짜보았다.

솔직히 나는 객체지향 프로그래밍에 무지하다.
하지만 mvc 패턴을 따르기로한 김에 객체지향 프로그래밍을 녹여내면 좋은 코드가 될 것 같아서 이번 기회에 학습해보려고 한다.
그래서 일단 프로그램 흐름을 위와 같이 작성했지만, 막상 개발하면서 내가 이해하고 있던 객체 개념이 틀린 것이었으면 바뀔 수 있다.

우선 기존의 내 개발 패턴과는 다른 패턴을 적용해보기로 했으니 mvc 패턴에 대해 조금 학습하고 디렉터리 구조를 짠 뒤 기능 목록을 적어봐야겠다.

## 2.2. 디렉터리 구조 설계

```js
__tests__/
├── ApplicationTest.js
src/
├── controllers/
│   ├── main.js
│   ├── gameController.js
│   ├── gameResultController.js
│   ├── raceController.js
│   └──	rounds/
│   	├── raceRound.js
│   	└── resultRound.js
├── models/
│   ├── car.js
│   ├── carList.js
│   └── winner.js
│
├── views/
│   ├── printIsWinner.js
│   ├── printResult.js
│   └── printRound.js
├── utils/
│   ├── generateAdvanceSymbol.js
│   ├── formatResultMessage.js
│   ├── setStringWinner.js
│	├──	carNameInput.js
│	├──	tryNumberInput.js
|   ├── validateInput.js
|   └── createCarList.js
├──App.js
└──index.js
.
.
.
```

일단 1차적으로 설계해본 디렉터리 구조는 위와 같다. 솔직히 아직 MVC 패턴 개념이 낯설기도 하고 객체지향 프로그래밍도 이해한 게 맞는지 확실하지 않아서 직접 개발하면서 얼마든지 변경될 수 있을 것 같다. 그래서 기능 목록은 조금 크게크게 나눠보려고 한다.

# 2. 기능 목록

1. 프로그램 시작 안내 출력
2. 사용자에게 경주할 차 이름과 시도할 횟수를 input 받는 기능
3. 사용자 입력 검증 기능
4. 시도할 횟수(n번)을 인자로 받아 n번 코드를 반복하는 기능
5. 레이싱 기능
6. 레이싱 라운드 별 결과 출력 기능
7. 최종 우승자 반환 기능
8. 최종 결과 출력
9. 테스트 케이스 작성

# 3. 개발 체크 리스트

[ ] 주석이 필요 없을만큼 명확한 네이밍<br>
[ ] 하나의 함수는 하나의 역할만 수행하기<br>
[ ] 들여쓰기 depth는 2까지<br>
[ ] 3항 연산자 쓰지 않기<br>
[ ] Random 값 추출은 Random.pickNumberInRange()를 활용<br>
[ ] 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용<br>
[ ] 줄임말 쓰지 말기<br>
[ ] 코드 포맷팅 하기<br>
[ ] 오류를 찾을 때 함수보단 디버거 활용<br>
[ ] 최대한 자바스크립트 API 잘 활용하기<br>
[ ] 배열도 배열 자체 재할당이 아닌 경우 const 선언<br>
[ ] 커밋 메세지 영어 작성<br>
[ ] run()에서는 최대한 호출만<br>
[ ] 비동기가 필요한 곳에만 잘 쓰였는지<br>
[ ] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인<br>
[ ] 제출할 때 회고 작성하기<br>
(지원서에 작성한 목표를 얼마나 달성하고 있다고 생각하나요? 그 이유는 무엇인가요?
지원서에 작성한 목표를 변경해야 한다고 생각하시나요? 그렇다면 그 이유와 어떤 목표로 변경하고 싶으신가요?
프리코스를 진행하면서 눈에 띄는 변화나 깨달은 점이 있나요?)<br>
[ ] 제출할 때 외부링크 걸지 말기

# 4. 개발 중 메모

함수 파일 분리 나중에

number 타입 변환 메소드
Number(), parseInt(), parseFloat()

시도할 횟수 제한? 일단 100설정

for await ?
