import { Console } from '@woowacourse/mission-utils';
import { Validator } from './index.js';

class UserInterface {
  static async processStringInput(query) {
    const inputString = await Console.readLineAsync(query);
    const trimmedInput = inputString.trim();
    return Validator.validateName(trimmedInput);
  }

  static async processNumberInput(query) {
    const inputString = await Console.readLineAsync(query);
    const inputNumber = Number(inputString);
    return Validator.validateAttempt(inputNumber);
  }

  static print(query) {
    Console.print(query);
  }

  static printNewline() {
    Console.print('');
  }
}

export default UserInterface;
