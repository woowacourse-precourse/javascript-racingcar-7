import { Console } from "@woowacourse/mission-utils";
import Validation from "./Validation.js"
import { INPUT_MESSAGE } from "./constant.js";
class InputView {
  static async CarNameInput() {
    const carInput = await Console.readLineAsync(INPUT_MESSAGE.NAME_INPUT);
    const carArr = carInput.trim().split(',');
    Validation.checkCarName(carArr);
    return carArr;
  }

  static async CountInput() {
    const countInput = await Console.readLineAsync(INPUT_MESSAGE.COUNT_INPUT);
    Validation.checkMoveCount(countInput);
    return Number(countInput);
  }
}
export default InputView;