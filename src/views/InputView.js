import { Console } from '@woowacourse/mission-utils';
import Constants from '../utils/Constants.js';

class InputView {
  static async readCarNames() {
    try {
      return await Console.readLineAsync(Constants.INPUT_MESSAGES.CAR_NAME_QUESTION);
    } catch (error) {
      throw new error(Constants.ERROR_MESSAGES.CAR_NAME_ERROR)
    }
  }

  static async readAttemptCount() {
    try {
      return await Console.readLineAsync(Constants.INPUT_MESSAGES.NUMBER_QUESTION);
    } catch (error) {
      throw new error(Constants.ERROR_MESSAGES.NUMBER_ERROR)
    }
  }
}

export default InputView;
