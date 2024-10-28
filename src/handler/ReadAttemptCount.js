import { MissionUtils } from "@woowacourse/mission-utils";
import {
  INPUT_ATTEMPT_COUNT_MESSAGE,
  ATTEMPT_COUNT_ERROR_MESSAGE,
  NAN_ERROR_MESSAGE
} from "../constants/Messages.js";

export class ReadAttemptCount {
  async read() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_ATTEMPT_COUNT_MESSAGE);
    this.#validate(input);
    return Number(input);
  }

  #validate(input) {
    this.#checkEmpty(input);
    this.#isNumber(Number(input));
  }

  #checkEmpty(input) {
    if (input.trim() === '') throw new Error(ATTEMPT_COUNT_ERROR_MESSAGE);
  }

  #isNumber(input) {
    if (isNaN(input)) throw new Error(NAN_ERROR_MESSAGE);
  }
}
