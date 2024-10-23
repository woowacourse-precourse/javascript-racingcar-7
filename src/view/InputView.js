import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/index.js';

class InputView {
  static async readCarNames() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAME_INPUT);
    return input.split(',');
  }

  static async readTryNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.TRY_NUMBER_INPUT);
    return Number(input);
  }
}

export default InputView;
