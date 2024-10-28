import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, MESSAGE } from "./constants.js";
import Car from "./Car.js";
import Validator from "./Validator.js";

class App {
  async run() {
    const nameInput = await Console.readLineAsync(MESSAGE.CARNAME_INPUT);
    Validator.validateNameInput(nameInput);

    const carNames = nameInput.split(",").map((name) => new Car(name));

    const tryCount = await Console.readLineAsync(MESSAGE.TRYCOUNT_INPUT);
    Validator.validateTryCountInput(tryCount);
    const tryNumber = Number(tryCount);
  }
}

export default App;
