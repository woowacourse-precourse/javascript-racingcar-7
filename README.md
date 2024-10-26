## 🏁 과제 진행 요구 사항

<details>
<summary>자세히 보기</summary>

- 미션은 과제를 포크하고 클론하는 것으로 시작한다.

- 기능을 구현하기 전 `README.md` 에 구현 할 기능 목록을 정리하여 추가한다.
- Git의 커밋 단위는 앞 단계에서 `README.md`에 정리한 기능 목록 단위로 추가한다.

</details>

## ⚙️ 기능 요구 사항

<details>
<summary>자세히 보기</summary>

> **초간단 자동차 경주 게임을 구현한다.**

- 주어진 횟수 동안 n대의 자동차는 `전진` 또는 `멈출 수` 있다.

- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 이름을 같이 출력한다.
- 각 자동차에 이름은 `쉼표(,)`를 기준으로 구분하며 `이름은 5자이하만 가능`하다.
- 사용자는 몇 번의 이동을 할 것인지 입력할 수 있어야 한다.
- 전진하는 조건은 `0에서 9 사이에서 무작위 값`을 구한 후 그 값이 `4 이상`일 경우이다.
- 게임을 완료한 후 누가 우승했는지 알려준다. 우승자는 `한 명 이상`일 수 있다.
  - 우승자가 `여러 명일 경우 쉼표(,)를 이용`하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 `[ERROR]` 로 시작하는 메세지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

### 📸 입출력 요구 사항

**[입력]**

- 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)
- 시도할 횟수

**[출력]**

- 차수별 실행 결과
- 단독 우승자 안내 문구
- 공동 우승자 안내 문구

**실행 결과 예시**

```tsx
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

</details>

## 💻 프로그래밍 요구 사항 1

<details>
<summary>자세히 보기</summary>

- Node.js 20.17.0 버전에서 실행 가능해야 한다.

- 프로그램 실행의 시작점은 `App.js` 의 `run()` 이다.
- `package.json` 은 변경할 수 없으며, 제공된 라이브러리만 사용해야 한다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 코드를 작성한다.

</details>

## 💻 프로그래밍 요구 사항 2

<details>
<summary>자세히 보기</summary>

- depth는 2까지만 허용한다.

  - while문안에 if문이 있다면 depth는 2이다.

  - 조건과 분기를 위한 인덴트가 2depth가 넘지 않는 것을 의미한다.
  - 단순히 가독성을 위해 depth가 깊어지는 경우는 작성 가능하다.

- 삼항 연산자는 사용하지 않는다.
- 함수가 한 가지 일만 하도록 최대한 작게 만들기
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트한다.

</details>

## 🤔 생각해보기

<details>
<summary>자세히 보기</summary>

### 가설 1. 자동차 이름에 중복을 허용할지?

→ **전진할 때는 입력한 순서로 구분할 수 있지만, 최종 결과에서 자동차의 이름만 출력하기 때문에 어떤 자동차가 우승했는지 알 수 없기 때문에 중복 금지**

### 가설 2. 자동차 이름에 공백은 어떻게 처리할지?

`1. 모든 공백 허용`, `2. 모든 공백 제거(앞, 뒤, 중간)`, `3. 앞, 뒤 공백만 제거`

- 문자열 중간에 있는 공백은 유저가 확인하기 쉽고 의도적으로 입력된 경우가 많을 것 같다.
- 하지만 앞, 뒤 공백은 실수로 입력되는 경우가 많은 것 같아서 제거해주면 좋을 것 같다.

→ **`앞, 뒤 공백만 제거`**

### 가설 3. 자동차 이름에 빈 문자열이 오는 경우

→ **예외 처리 하기, `최소 1자 이상 5자 이하로 제한`**

### 가설 4. 시도할 횟수에 음수나 소수가 오는 경우

→ **양의 정수 이외의 값은 모두 예외 처리하기**

</details>

## 📝 코드 설계

<details>
<summary>자세히 보기</summary>

1. 자동차 이름들을 입력 받는다.

2. 자동차 이름들을 `쉼표(,)` 를 기준으로 나눈다.
3. 각 자동차 이름에 `앞, 뒤 공백을 제거`한다.
4. 자동차 이름들에 `중복이 있다면` 예외 처리한다.
5. 자동차 이름이 `1자 이상 5자 이하가 아닌 경우` 예외 처리한다.
6. 시도할 횟수를 입력 받는다.
7. `양의 정수가 아니라면` 예외 처리한다.
8. 시도할 횟수 만큼 전진하고 결과를 출력한다.
9. 결과를 보고 최종 우승자를 구한다.
10. 최종 우승자를 출력한다.

</details>

## 🎯 구현 할 기능 목록

<details open>
<summary>자세히 보기</summary>

- [x] 자동차 이름들을 입력 받는다.

  - [x] 자동차 이름들을 `쉼표(,)` 를 기준으로 나눈다.

  - [x] 각 자동차 이름에 `앞, 뒤 공백을 제거`한다.

- [x] 자동차 이름들에 `중복이 있다면` 예외 처리한다.
- [x] 자동차 이름이 `1자 이상 5자 이하가 아닌 경우` 예외 처리한다.
- [x] 시도할 횟수를 입력 받는다.
- [x] `양의 정수가 아니라면` 예외 처리한다.
- [x] 시도할 횟수 만큼 전진하고 결과를 출력한다.
- [x] 마지막 결과를 기준으로 최종 우승자를 구한다.
- [x] 최종 우승자를 출력한다.

</details>

## 👀 미션 라이브러리 까보기

<details open>
<summary>자세히 보기</summary>

```tsx
// 시작 범위 ~ 끝 범위 내 랜덤 정수를 생성하는 메서드
static pickNumberInRange(startInclusive, endInclusive) {
  Random.#validateRange(startInclusive, endInclusive);

  startInclusive = Math.ceil(startInclusive);

  return (
    Math.floor(Math.random() * (endInclusive + 1 - startInclusive)) +
    startInclusive
  );
}
```

- `validateRange` 를 호출하여 인자 값들을 유효성 검사한다.

- 시작 범위을 `무조건 올림(ceil)` 한다.
- `Math.random()` : 0 이상 1미만의 부동 소수점 난수를 생성한다.
- `endInclusive + 1 - startInclusive`: 생성하고자 하는 난수의 범위를 결정한다.
- 생성된 난수를 `Math.floor` 를 통해 가장 가까운 정수로 내림 처리한다.
- 이 결과의 시작 값을 더해 `시작 값 ~ 끝 값 범위의 무작위 정수를 반환`한다.

### 정리하기

→ 인자 값(범위)들을 유효성 검사

→ `0 ~ 끝 범위`까지의 랜덤 난수 생성

→ 정수로 내림 처리

→ 시작 범위를 더해 `시작 범위 ~ 끝 범위의 무작위 정수` 반환

### `validateRange` 유효성 검사 로직

```tsx
static #isNumber(value) {
  return typeof value === "number";
}

static #validateRange(startInclusive, endInclusive) {
	// 타입이 숫자인지 체크
  if (!Random.#isNumber(startInclusive) || !Random.#isNumber(endInclusive)) {
    throw new Error("arguments must be numbers.");
  }

	// 자바스크립트에서 표현할 수 있는 최대 음수 -9007199254740991 체크
  if (startInclusive < Number.MIN_SAFE_INTEGER) {
    throw new Error(
      "startInclusive cannot be less than Number.MIN_SAFE_INTEGER"
    );
  }

	// 자바스크립트에서 표현할 수 있는 최대 정수 9007199254740991 체크
  if (endInclusive > Number.MAX_SAFE_INTEGER) {
    throw new Error(
      "endInclusive cannot be greater than Number.MAX_SAFE_INTEGER."
    );
  }

  // 시작 범위가 끝 범위보다 크다면
  if (startInclusive > endInclusive) {
    throw new Error(
      `startInclusive ${startInclusive} cannot be greater than endInclusive ${endInclusive}.`
    );
  }

  // 자바스크립트에서 표현할 수 있는 최대 숫자 값 1.7976931348623157 × 10^308 체크
  if (endInclusive - startInclusive >= Number.MAX_VALUE) {
    throw new Error("the input range is too large.");
  }
}
```

</details>

## 🐱 Git 커밋 컨벤션

<details>
<summary>자세히 보기</summary>

|   Type   | Description                                           |
| :------: | ----------------------------------------------------- |
|   init   | 초기 설정                                             |
|   feat   | 새로운 기능 추가                                      |
|   fix    | 버그 수정                                             |
| refactor | 코드 리팩토링                                         |
| comment  | 필요한 주석 추가 및 변경                              |
|  chore   | 패키지 매니저 수정, 그 외 기타 수정 ex) `.gitnore` 등 |
|  rename  | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우    |
|  remove  | 파일을 삭제하는 작업만 수행한 경우                    |
|   docs   | 문서 수정                                             |
|   test   | 테스트 코드 작성 및 수정                              |

</details>

## 📂 폴더 구조

<details open>
<summary>자세히 보기</summary>

```js
📦src
 ┣ 📂constants // 상수 폴더
 ┃ ┣ 📜index.js // 상수 배럴 파일
 ┃ ┣ 📜message.js // 메세지
 ┃ ┗ 📜rule.js // 게임 규칙
 ┣ 📂utils // 유틸 폴더
 ┃ ┣ 📜advance.js // 자동차 전진 관련 로직
 ┃ ┣ 📜console.js // 콘솔 관련(입출력)
 ┃ ┣ 📜controller.js // 컨트롤러(자동차 정보 가져오기, 전진 카운트 증가 등)
 ┃ ┣ 📜index.js // 유틸 배럴 파일
 ┃ ┣ 📜validation.js // 유효성 검사 로직
 ┃ ┗ 📜winner.js // 우승자 관련 로직
 ┣ 📜App.js // 애플리케이션 구현
 ┗ 📜index.js // 실행 파일
```

</details>

## 🚨 트러블 슈팅

<details>
<summary>자세히 보기</summary>

### Jest의 **`expect`** 객체의 `not` 속성

```tsx
const assertCondition = (condition, message) => {
  if (condition) {
    throw new Error(createErrorMessage(message));
  }
};

// 처음 작성한 코드
test("조건이 false이므로 예외 처리가 발생하지 않습니다.", () => {
  expect(() => assertCondition(false, errorMessage))
    .not()
    .toThrow();
});
```

- **`not` 은 함수가 아니고 `expect` 객체의 속성이기 때문에 `.not` 으로 사용해야 한다.**

```tsx
// 수정 후 코드
test("조건이 false이므로 예외 처리가 발생하지 않습니다.", () => {
  expect(() => assertCondition(false, errorMessage)).not.toThrow();
});
```

공식 문서에서 `not` 이라는 속성을 보고 내용도 읽지 않고 예측해서 사용하려다 보니깐 실수하는 부분이 있었다.

→ 천천히 읽어보고 사용하는 습관을 길러야 할 것 같다.

</details>

## 😮 배운 것들

<details>
<summary>자세히 보기</summary>

### **`Number.isInteger`**

전달된 값이 정수인지 여부를 판별한다.

```tsx
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(-1)); // true
console.log(Number.isInteger(1.1)); // false
```

</details>
