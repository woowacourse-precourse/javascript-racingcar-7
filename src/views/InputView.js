import MESSAGE from '../constants/Message.js';
import { Console } from '@woowacourse/mission-utils';
import { InputValidator } from '../utils/Validator.js';
import { InputParser } from '../utils/Parser.js';

class InputView {
  static async inputCarNames() {
    const inputCarNmaes = await Console.readLineAsync(MESSAGE.INFO.CAR_NAME);
    InputValidator.isEmpty(inputCarNmaes);
    const carNames = InputParser.parseNamesToArray(inputCarNmaes);

    return carNames;
  }

  static async inputTryNumber() {
    const inputTryNumber = await Console.readLineAsync(MESSAGE.INFO.TRY_NUMBER);
    InputValidator.isEmpty(inputTryNumber);

    const tryNumber = InputParser.parseToNumber(inputTryNumber);

    return tryNumber;
  }
}

export default InputView;
