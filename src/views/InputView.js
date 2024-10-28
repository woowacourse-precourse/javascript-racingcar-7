import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';
import Constants from '../utils/constants.js';

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

  static readAttemptCount() {
    return new Promise((resolve, reject) => {
      Console.readLineAsync("시도할 횟수는 몇 회인가요?", (input) => {
        try {
          const attempts = Validator.validateAttemptCount(parseInt(input, 10));
          resolve(attempts);
        } catch (error) {
          Console.print(error.message);
          reject(error);
        }
      });
    });
  }
}

export default InputView;
