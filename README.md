# javascript-racingcar-precourse

### Game Flow

- [x] 자동차 이름 입력 받기
- [x] 자동차 이름 입력 유효성 검증
- [x] 시도할 횟수 입력 받기
- [x] 시도할 횟수 유효성 검증
- [x] 시도할 횟수만큼 자동차 경주 진행(무작위 값 4이상일 경우 전진)
- [x] 경주 결과 출력
- [x] 우승자 출력

## 자동차 이름 유효성 검증

- [x] 자동차 이름이 빈 값일 경우
- [x] 자동차 이름이 5자 보다 길 경우
- [x] 자동차를 한 대만 입력했을 경우
- [x] 자동차 이름이 쉼표(,)를 포함할 경우 -> 자동차 이름이 빈 값일 경우의 로직으로 함께 걸러짐
- [x] 자동차 이름에 공백이 포함된 경우
- [x] 자동차 이름이 중복된 경우

## 시도할 횟수 유효성 검증

- [x] 시도할 횟수를 빈 값으로 입력했을 경우
- [x] 시도할 횟수가 숫자가 아닐 경우
- [x] 시도할 횟수가 0보다 작거나 9보다 클 경우 경우

## 자동차 이름 입력 에러

- [x] 자동차 이름을 입력해주세요.
- [x] 자동차 이름은 5자 이하로 입력해주세요.
- [x] 자동차를 한 대만 입력했습니다.
- [x] 자동차 이름은 쉼표(,)를 포함할 수 없습니다.
- [x] 자동차 이름에 공백은 포함할 수 없습니다.
- [x] 자동차 이름이 중복되었습니다.

## 시도할 횟수 입력 에러

- [x] 시도할 횟수를 입력해주세요.
- [x] 시도할 횟수는 숫자로 입력해주세요.
- [x] 시도할 횟수는 0보다 크고 9보다 작아야 합니다.

## 우승자 출력 주의사항

- [x] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분

### 디렉토리 구조

├── App.js
├── Validator
| ├── validateAttempts.js
| ├── validateAttempts.test.js
| ├── validateCarName.js
| └── validateCarName.test.js
├── constants
| └── messages.js
├── controller
| ├── Game.js
| └── Game.test.js
├── index.js
├── model
| ├── Car.js
| ├── Car.test.js
| ├── Race.js
| └── Race.test.js
├── user
| ├── User.js
| └── User.test.js
├── util
| ├── errorThrower.js
| ├── random.js
| └── util.js
└── view
├── outputView.js
└── outputView.test.js

### commit convention

- feat : 기능 추가
- fix : 버그 수정
- docs : 문서
- style : 코드 스타일 수정
- refactor : 리펙토링
- test : 테스트코드 추가
- chore : 기타 작업

## 고민했던 부분 및 의논점

- App에서 game의 인자에 user는 인스턴스를, race는 클래스를 넣는 이유

```js
  constructor(user, outputView, RaceClass) {
    this.user = user;
    this.outputView = outputView;
    this.RaceClass = RaceClass;
    this.raceInstance = null;
  }
```

1. raceInstance는 실제로 필요한 시점(cars가 준비된 후)에 생성.
2. Race 클래스의 생성자가 매개변수(cars)를 필요로 하기 때문에, App에서 미리 인스턴스화하면 cars를 어떻게 전달할지가 문제가 될 수 있음.

반면 User의 경우:

1. 생성자에 특별한 매개변수가 필요없음
2. 인스턴스를 즉시 사용할 수 있음
3. 지연 초기화가 필요없음

따라서 User는 바로 인스턴스화해서 주입하고, Race는 클래스로 주입하여 나중에 필요한 시점에 인스턴스화 하였습니다.

### 책임의 범위와 관심사 분리

Car 클래스에서 무작위 값을 생성하는 로직을 담고있고, 이를 통해 move를 시켜주는 구조였는데요,

```js
move(randomNumber) {
    if (randomNumber >= 4) {
      this.position++;
    }
  }

//리팩토링
move(enabled) {
    if (enabled) {
      this.position++;
    }
  }
```

이렇게 randomNumber관련 로직은 밖에서 판단하며,
move 메서드의 책임은 단순히 위치를 증가시키는 것으로 한정하였습니다.
하나의 클래스, 그리고 그 안에서의 메서드의 책임은 어디까지일지 고민하며 리팩토링하였습니다.

### ui로직을 테스트할 필요가 있는가?

ui로직에 대해 테스트할 필요가 있는지 여러분들과 의논하고 싶습니다.
현재 미션에서는 우승자 출력 시 ','를 포함하여 출력하는 부분에서만 테스트 할 필요가 있다고 판단하였는데, 여러분들 의견이 궁금합니다.
