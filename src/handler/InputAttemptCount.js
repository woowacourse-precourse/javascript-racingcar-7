import { MissionUtils } from "@woowacourse/mission-utils";
import {
  INPUT_ATTEMPT_COUNT_MESSAGE,
  ATTEMPT_COUNT_ERROR_MESSAGE,
  NAN_ERROR_MESSAGE
} from "../constants/Messages.js";
import { MIN_ATTEMPT_COUNT } from "../constants/Constants.js";

export class InputAttemptCount {
  async read() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_ATTEMPT_COUNT_MESSAGE);
    this.#validate(input);
    return input;
  }

  #validate(input) {
    this.#checkEmpty(input);
    const number = Number(input);
    this.#isNumber(number);
    this.#checkRange(number);
  }

  #checkEmpty(input) {
    if (input.trim() === '') throw new Error(ATTEMPT_COUNT_ERROR_MESSAGE);
  }

  #isNumber(input) {
    if (isNaN(input)) throw new Error(NAN_ERROR_MESSAGE);
  }

  #checkRange(input) {
    if (input < MIN_ATTEMPT_COUNT) throw new Error(ATTEMPT_COUNT_ERROR_MESSAGE);
  }
}
