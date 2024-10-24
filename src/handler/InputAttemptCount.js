import { MissionUtils } from "@woowacourse/mission-utils";

const INPUT_ATTEMPT_COUNT_MESSAGE = '시도할 횟수는 몇 회인가요? ';
const ATTEMPT_COUNT_ERROR_MESSAGE = '[ERROR] 시도 횟수를 1이상 숫자로 입력해주세요.';
const NAN_ERROR_MESSAGE = '[ERROR] 시도 횟수는 숫자입니다.';

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
  }

  #checkEmpty(input) {
    if (input.trim() === '') throw new Error(ATTEMPT_COUNT_ERROR_MESSAGE);
  }

  #isNumber(input) {
    if (isNaN(input)) throw new Error(NAN_ERROR_MESSAGE);
  }
}
