import { MissionUtils } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE } from "../static/Static.js";

class InputView {
  static async readCarNames() {
    return await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.inputName);
  }

  static async readAttempts() {
    return await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.inputTries);
  }
}

export default InputView;