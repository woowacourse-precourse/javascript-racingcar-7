import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../utils/constants.js";

class InputView {
  async inputCarNames() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAMES);
    return input;
  }

  async inputTryCount() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.TRY_COUNT);
    return input;
  }
}

export default InputView;
