import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/Message.js";

export default class InputView {
  static async readCarNames() {
    const input = await Console.readLineAsync(MESSAGE.READ_CAR_NAMES + "\n");
    return input;
  }
}
