import { Console } from '@woowacourse/mission-utils';
import { Validator } from './index.js';

class Interface {
  static async processStringInput(query) {
    const inputString = await Console.readLineAsync(query);
    const validatedNames = Validator.validateName(inputString);
    return validatedNames;
  }

  static async processNumberInput(query) {
    const inputString = await Console.readLineAsync(query);
    const validatedCounts = Validator.validateAttempt(Number(inputString));
    return validatedCounts;
  }

  static printNewline() {
    Console.print('');
  }
}

export default Interface;
