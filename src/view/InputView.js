import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/index.js';

class InputView {
  static async readCarNames() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAME_INPUT);
    return input;
  }

  static async readTryNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.TRY_NUMBER_INPUT);
    return input;
  }
}

export default InputView;
