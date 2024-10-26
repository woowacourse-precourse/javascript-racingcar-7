import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/messages.js";

class InputView {
  static async readCarNames() {
    return await InputView.readInput(INPUT_MESSAGE.carNames);
  }

  static async readInput(input) {
    return await Console.readLineAsync(input);
  }
}

export default InputView;
