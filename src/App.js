import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants.js";

class App {
  async run() {
    const nameInput = await Console.readLineAsync(MESSAGE.CARNAME_INPUT);
    Console.print(nameInput);
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
  }
}

export default App;
