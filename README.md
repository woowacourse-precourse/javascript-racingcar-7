# 🚗 2주차 자동차 경주

## **기능 요구 사항**

초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 🌀 시스템의 흐름

1. 사용자가 자동차 이름들을 쉼표로 구분하여 입력한다.
2. 쉼표를 기준으로 각 자동차 이름을 추출한다.<br>
   2.1 입력에서 공백이 있지 않았는지 확인한다.<br>
   2.2 쉼표외에 다른 구분자를 사용하지 않았는지 확인한다.<br>
   2.3 문자만을 사용하여 자동차 이름을 입력했는지 확인한다.<br>
   2.4 자동차 이름이 다섯자를 초과하지 않는지 확인한다.
3. 사용자에게 몇 번의 이동을 할 것인지 입력받는다.
4. 사용자가 입력한 만큼 자동차 이동을 반복한다.<br>
   4.1 각 자동차의 전진 값을 무작위로 추출한다.<br>
   4.2 각 자동차의 전진 값을 자동차의 이름과 함께 화면에 표시한다.<br>
   4.3 현재 진행상황까지의 누적 전진값을 계산한다. (4이상인 경우에만 누적)
5. 누적 전진값을 사용해 우승자를 뽑는다
6. 사용자에게 우승자를 발표한다.

## 📝 구현해야할 기능 목록

#### `inputCarName()`

- 사용자에게 자동차이름을 나열한 문자열을 입력 받는 함수입니다.

#### `extractCarName()`

- 입력받은 문자열에서 쉼표를 기준으로 자동차 이름을 추출하는 함수입니다.

#### `validateNoWhitespace()`

- 입력한 문자열에 공백이 포함되어 있는지 검사하는 함수입니다.
- 추출한 자동차 이름 목록에서 공백이 포함되어 있는 경우가 있다면 [ERROR] 메시지를 출력하고, Error를 throw하여 프로그램을 종료합니다.

#### `validateSeparatorIsComma()`

- 입력한 문자열에서 자동차 이름을 구분하는 구분자가 모두 쉼표인지를 검사하는 함수입니다.
- 다른 구분자가 포함되어 있는 경우가 있다면 [ERROR] 메시지를 출력하고, Error를 throw하여 프로그램을 종료합니다.

#### `validateMaxFiveChars()`

- 자동차의 이름이 다섯글자를 초과하지 않는지 검사하는 함수입니다.
- 추출한 자동차 이름 목록에서 다섯글자를 초과하는 글자가 있다면 [ERROR] 메시지를 출력하고, Error를 throw하여 프로그램을 종료합니다.

#### `validateOnlyLetters()`

- 자동차 이름을 문자로 작성하였는지 확인하는 함수입니다.
- 문자로 작성하지 않았다면 [ERROR] 메시지를 출력하고, Error를 throw하여 프로그램을 종료합니다.

#### `inputNumberOfMoves()`

- 사용자에게 자동차들이 몇번의 이동을 거쳐 경주를 진행할 건지를 입력받는 함수입니다.

#### `validatePositiveNumber()`

- 이동할 수를 입력하고 그 값이 양수인지를 검사하는 함수 입니다.
- 양수가 아니라면 [ERROR] 메시지를 출력하고, Error를 throw하여 프로그램을 종료합니다.

#### `movingCar()`

- 이동할 수 만큼 자동차의 경주를 시행하는 함수 입니다.

#### `extractMoveValue()`

- 전진 값을 무작위로 추출하는 함수입니다.

#### `showMoveValue()`

- 각 자동차의 이름과 무작위로 추출한 전진값을 보여주는 함수입니다.

#### `calculateTotalMoveValue()`

- 현재 진행중인 상황까지의 누적 전진값을 계산하는 함수입니다.
- 전진 값이 4이상인 경우에만 값이 누적됩니다.

#### `pickWinner()`

- 누적 전진값을 이용해 우승자를 뽑는 함수입니다.

#### `announceWinner()`

- 사용자에게 우승자를 알리기 위해 화면에 우승자를 표시하는 함수 입니다.
