import { Console } from '@woowacourse/mission-utils';
import { NameError, RoundError } from './CustomError.js';

class Input {
  static async createCarNames(message) {
    const input = await this.#readInput(message);
    if (!input) {
      throw new NameError('경주할 자동차 이름을 입력하세요.');
    }
    const carNames = input.split(',').map((carName) => carName.trim());
    const 중복체크 = new Set();
    carNames.forEach((carName) => {
      if (!carName.match(/^[a-zA-Z]+$/)) {
          throw new NameError('자동차 이름은 영문자만 가능합니다.');
      }
      if (carName.length > 5) {
        throw new NameError('자동차 이름은 5자 이하만 가능합니다.');
      }
      중복체크.add(carName);
    });
    if (중복체크.size !== carNames.length) {
      throw new NameError('자동차 이름은 중복될 수 없습니다.');
    }
    return carNames;
  }

  static async createRound(message) {
    const input = await this.#readInput(message);
    if (!input) {
        throw new RoundError('시도할 횟수를 입력해주세요');
    }
    if (isNaN(input)) {
      throw new RoundError('시도할 횟수는 숫자만 입력해주세요');
    }
    if (input <= 0) {
      throw new RoundError('시도할 횟수는 1 이상의 양수를 입력해주세요');
    }
    return parseInt(input, 10);
  }

  static #readInput(message) {
    return Console.readLineAsync(message + '\n');
  }
}

export default Input;
