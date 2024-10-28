import parserCarList from "../Utils/parserCarList.js";
import { GIDE_MESSAGE } from "../Constants/constant.js";
import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../Validator/InputValidator.js";

class Input {
  static async inputGideMessage(gideMessage) {
    const input = await Console.readLineAsync(gideMessage);
    return String(input);
  }

  static async CarList() {
    const cars = await this.inputGideMessage(GIDE_MESSAGE.carList);
    InputValidator.validateInputCarList(cars);

    const carList = parserCarList(cars);
    InputValidator.validateCarArray(carList);
    return carList;
  }

  static async TryNum() {
    const tryNum = await this.inputGideMessage(GIDE_MESSAGE.tryNum);
    InputValidator.validateTryNumber(tryNum);
    return tryNum;
  }
}

export default Input;
