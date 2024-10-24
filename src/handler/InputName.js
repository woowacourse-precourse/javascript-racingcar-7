import { MissionUtils } from "@woowacourse/mission-utils";
import { SEPARATOR } from "../constants/Constants.js";
import { INPUT_ERROR_MESSAGE, INPUT_NAME_MESSAGE, SEPARATOR_ERROR_MESSAGE } from "../constants/Messages.js";

export class InputName {
  async read() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_NAME_MESSAGE);
    this.#validateInput(input);
    return input.split(SEPARATOR);
  }

  #validateInput(input) {
    this.#checkEmpty(input);
    this.#checkSeparator(input);
  }

  #checkEmpty(input) {
    if (input.trim() === '') throw new Error(INPUT_ERROR_MESSAGE);
  }

  #checkSeparator(input) {
    if (input.indexOf(SEPARATOR) === -1) throw new Error(SEPARATOR_ERROR_MESSAGE);
  }
}
