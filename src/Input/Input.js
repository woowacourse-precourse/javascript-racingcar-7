import parserCarList from "../Utils/parserCarList.js";
import { GIDE_MESSAGE } from "../Constants/constant.js";
import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../Validator/InputValidator.js";

/**
 * @classdesc 사용자의 입력을 받는 클래스
 * - `inputGideMessage` : 사용자에게 안내 메시지를 출력하고 입력을 받는다.
 * - `CarList` : 사용자에게 자동차 리스트를 입력받는다.
 * - `TryNum` : 사용자에게 시도 횟수를 입력받는다.
 */
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
