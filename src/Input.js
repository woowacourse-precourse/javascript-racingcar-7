import { Console } from '@woowacourse/mission-utils';
import { NameError, RoundError } from './CustomError.js';
import ErrorHandler from './ErrorHandler.js';

class Input {
  static async createCarNames(message) {
    const input = await this.#readInput(message);
    const carNames = input.split(',').map((carName) => carName.trim());
    ErrorHandler.validateCarNames(carNames);
    return carNames;
  }

  static async createRound(message) {
    const input = await this.#readInput(message);
    ErrorHandler.validateRound(input);
    return parseInt(input, 10);
  }

  static #readInput(message) {
    return Console.readLineAsync(message + '\n');
  }
}

export default Input;
