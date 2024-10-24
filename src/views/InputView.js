import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES, ERROR_MESSAGES } from "../utils/constants.js";

export default class InputView {
  static async requestCarNames() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.REQUEST_CAR_NAMES);
    if (!input) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
    return input.trim();
  }

  static async requestAttempts() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.REQUEST_ATTEMPT_COUNT);
    if (!input) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
    return input.trim();
  }
}