import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../utils/constants.js";

export default class InputView {
  static async requestCarNames() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.REQUEST_CAR_NAMES);
    return input.trim();
  }

  static async requestAttempts() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.REQUEST_ATTEMPTS);
    return input.trim();
  }
}
