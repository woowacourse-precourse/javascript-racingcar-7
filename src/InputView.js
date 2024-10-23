import { Console } from "@woowacourse/mission-utils";
import { INPUT_QUERY } from "./constants.js";

class InputView {
  static async readCarNameList() {
    const input = await Console.readLineAsync(INPUT_QUERY.CAR_NAME_LIST);

    return input.trim().split(",");
  }

  static async readAttemptLimit() {
    const input = await Console.readLineAsync(INPUT_QUERY.ATTEMPT_LIMIT);

    return input.trim();
  }
}

export default InputView;
