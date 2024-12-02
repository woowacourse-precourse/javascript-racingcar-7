import MESSAGE from '../constants/Message.js';
import { Console } from '@woowacourse/mission-utils';
import { InputValidator } from '../utils/Validator.js';

class InputView {
  static async inputCarNames() {
    const input = await Console.readLineAsync(MESSAGE.INFO.CAR_NAME);
    InputValidator.isEmpty(input);

    return input;
  }
}

export default InputView;
