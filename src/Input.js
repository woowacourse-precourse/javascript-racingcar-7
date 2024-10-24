import { Console } from '@woowacourse/mission-utils';

class Input {
  static async createCarNames(message) {
    const input = await this.#readInput(message);
    const carNames = input.split(',').map((carName) => carName.trim());
    return carNames;
  }

  static async createRound(message) {
    const input = await this.#readInput(message);
    return parseInt(input, 10);
  }

  static #readInput(message) {
    return Console.readLineAsync(message + '\n');
  }
}

export default Input;
