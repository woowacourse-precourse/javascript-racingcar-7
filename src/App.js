import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, MESSAGE } from "./constants.js";
import Car from "./Car.js";

class App {
  async run() {
    const nameInput = await Console.readLineAsync(MESSAGE.CARNAME_INPUT);
    this.validateNameInput(nameInput);

    const carNames = nameInput.split(",").map((name) => new Car(name));

    Console.print(carNames);
  }

  validateNameInput(nameInput) {
    if (nameInput === "" || nameInput.split(",").some((name) => name === "")) {
      throw new Error(ERROR_MESSAGE.EMPTY_NAME); // 차 이름에 빈 값이 있는지 확인
    }
    if (nameInput.split(",").length !== new Set(nameInput.split(",")).size) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME); // 차 이름에 중복된 값이 있는지 확인
    }
    if (nameInput.split(",").some((name) => name.length > 5)) {
      throw new Error(ERROR_MESSAGE.OVER_LENGTH_NAME); // 차 이름이 5글자를 초과하는지 확인
    }
    if (nameInput.includes(" ")) {
      throw new Error(ERROR_MESSAGE.SPACE_NAME); // 입력할 때 공백이 있는지 확인
    }

    const nameFormat = /^[A-Za-z]+$/; // 영문자만 허용하는 정규 표현식
    if (nameInput.split(",").some((name) => !nameFormat.test(name))) {
      throw new Error(ERROR_MESSAGE.INVALID_CHAR_NAME); // 숫자나 특수 문자가 포함된 경우 에러 발생
    }
  }
}

export default App;
