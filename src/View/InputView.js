import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../utils/constants.js";

export class InputView {
  static carNameList() {
    return Console.readLineAsync(MESSAGE.CAR_NAME_INPUT);
  }

  static attemptCount() {
    return Console.readLineAsync(MESSAGE.ATTEMPT_COUNT_INPUT);
  }
}
