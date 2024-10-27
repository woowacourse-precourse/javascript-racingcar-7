import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants.js';

class InputView {
  static async readCarNames() {
    const input = await Console.readLineAsync(MESSAGES.INPUT_CAR_NAMES);
    return input.split(',');
  }

  static async readTryCount() {
    const input = await Console.readLineAsync(MESSAGES.INPUT_TRY_COUNT);
    return Number(input);
  }
}

export default InputView;
