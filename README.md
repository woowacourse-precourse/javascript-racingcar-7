# javascript-racingcar-precourse

## 🚘 자동차 경주

자동차 경주 게임 구현

### 구현 기능 목록

- [x] 자동차 이름 입력 받기
- [x] 시도(이동) 횟수 입력 받기
- [x] 자동차 생성
- [x] 자동차 이동
  - [x] (0-9) 랜덤 값 생성
  - [x] 자동차 이동 결정
  - [x] 자동차 이동거리 변경
  - [x] 자동차 이동 출력
- [x] 최대 이동 거리 계산
- [x] 우승자 선정하기
- [x] 우승자 출력하기

### 입력 예외 처리

- [x] 자동차 이름

- 입력하지 않을 시
- 중복된 자동차 이름
- 공백 이름
- 쉼표(,) 구분자가 아님
- 이름 글자수가 1~5자가 아님

- [x] 시도 횟수

- 입력하지 않을 시
- 숫자 입력이 아님
- 양의 정수가 아님

### 구현 기능 설명

**자동차 이름 입력 받기**

`<inputHandler.js getCarNamesInput>`

- '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)' 문구와 함께 한 줄의 문자열을 입력 받는다.

`<inputValidator.js checkCarsNameValidate>`

- 문자열이 규칙에 맞게 입력되었는지 검증 후, 유효한 경우 배열로 자동차 이름을 받는다.

**시도(이동) 횟수 입력 받기**

`<inputHandler.js getTryNumberInput>`

- '시도할 횟수는 몇 회인가요?' 문구와 함께 숫자를 입력 받는다.

`<inputValidator.js checkTryNumberValidate>`

- 숫자가 규칙에 맞게 입력되었는지 검증 후, 유효한 경우 시도 횟수를 숫자로 받는다.

**자동차 생성**

`<RacingGamePlayer.js createCars>`

- 자동차들은 Car 클래스를 통해 생성된다. 각 자동차들은 이름과 이동 거리를 속성으로 갖고 있다.

**자동차 이동**

`<RacingGamePlayer.js moveCars>`

- 각 자동차는 한 번의 라운드 마다 움직임을 결정하여 이동을 수행한다.

**(0-9) 랜덤 값 생성**

`<Car.js getRandomNumber>`

- 자동차는 랜덤으로 0-9 번호를 받는다.

**자동차 이동 결정**

`<Car.js canMove>`

- 자동차는 랜덤 숫자가 4이상이면 전진하도록 한다.

**자동차 이동거리 변경**

`<Car.js increaseDistance>`

- 자동차는 전진이 결정되면 이동거리를 1 증가시킨다.

**자동차 이동 출력**

`<RacingGamePlayer.js printRoundResults>`

- 자동차는 현재 이동 거리만큼 '-'를 출력한다.

**최대 이동 거리 계산**

`<RacingGamePlayer.js findMaxMovingDistance>`

- 모든 라운드 종료 후, 각 자동차들의 이동 거리에서 최대 거리를 찾는다.

**우승자 선정하기**

`<RacingGamePlayer.js findWinner>`

- 각 자동차의 거리가 최대 이동 거리와 같다면 우승자 목록에 넣는다.

**우승자 출력하기**

`<RacingGamePlayer.js announceWinner>`

- 최종 우승자들을 "최종 우승자 : "문구와 함께 출력하며, 우승자들을 `, `로 구분하여 출력한다.

### jest 기본 문법

```js
describe("그룹 테스트 설명 문자열",()=>{
test("개별 테스트 설명 문자열",()=>
expect(검증대상).to(기대결과);)
})
```
