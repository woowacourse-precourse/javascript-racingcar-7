import MESSAGES from "../constants/Messages.js";
import ERRORS from "../constants/Errors.js";
import { Console } from "@woowacourse/mission-utils";

class InputViews {
  staticCarNameInput() {
    try {
      return Console.readLineAsync(MESSAGES.CAR_INPUT);
    } catch (error) {
      throw new Error(ERRORS.GENERAL);
    }
  }

  static TryCountInput() {
    try {
      return Console.readLineAsync(MESSAGES.TRY_COUNT);
    } catch (error) {
      throw new Error(ERRORS.GENERAL);
    }
  }
}

export default InputViews;
