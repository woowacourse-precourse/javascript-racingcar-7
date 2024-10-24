import { MissionUtils } from "@woowacourse/mission-utils";

const INPUT_NAME_MESSAGE = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) ';
const LENGTH_ERROR_MESSAGE = '[ERROR] 이름은 1~5자로 입력해주세요.';

export class InputName {
  async read() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_NAME_MESSAGE);
    this.#validateInput(input);
    return input;
  }

  #validateInput(input) {
    this.#checkEmpty(input);
  }

  #checkEmpty(input) {
    if (input.trim() === '') throw new Error(LENGTH_ERROR_MESSAGE);
  }
}
