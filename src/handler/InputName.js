import { MissionUtils } from "@woowacourse/mission-utils";
import { SEPARATOR } from "../constants/Constants.js";

const INPUT_NAME_MESSAGE = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) ';
const INPUT_ERROR_MESSAGE = '[ERROR] 공백 입력은 불가합니다.';
const SEPARATOR_ERROR_MESSAGE = '[ERROR] 이름은 쉼표(,) 기준으로 구분해야 합니다.';

export class InputName {
  async read() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_NAME_MESSAGE);
    this.#validateInput(input);
    return input;
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
