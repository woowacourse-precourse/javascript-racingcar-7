import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { CONSOLE_MESSAGE } from './constant.js';
import {
  errorString,
  getUserInput,
  isIntegerNumber,
  isNumber,
  isPositiveNumber,
} from './util.js';

class RacingGameManager {
  #cars = [];

  #tryCount = 0;

  constructor() {}

  async playGame() {
    const carInput = await getUserInput(CONSOLE_MESSAGE.CAR_INPUT_MESSAGE);
    this.#validateCarInput(carInput);
    this.#cars = carInput.split(',').map((carName) => new Car(carName));

    const tryCountInput = await getUserInput(
      CONSOLE_MESSAGE.TRY_COUNT_INPUT_MESSAGE,
    );
    this.#validateTryCountInput(tryCountInput);
    this.#tryCount = Number(tryCountInput);
  }

  #validateCarInput(input) {
    if (!input.includes(',')) {
      throw new Error(errorString(CONSOLE_MESSAGE.MIN_CAR_COUNT_ERROR));
    }

    const carNames = input.split(',');
    const deduplicatedCarNames = new Set(carNames);
    if (carNames.length !== deduplicatedCarNames.size) {
      throw new Error(errorString(CONSOLE_MESSAGE.DUPLICATED_CAR_NAME_ERROR));
    }
  }

  #validateTryCountInput(input) {
    const inputToNumber = Number(input);
    Console.print(isIntegerNumber(inputToNumber));

    if (!isNumber(inputToNumber)) {
      throw new Error(
        errorString(CONSOLE_MESSAGE.INVALID_TRY_COUNT_TYPE_ERROR),
      );
    }

    if (!isPositiveNumber(inputToNumber) || !isIntegerNumber(inputToNumber)) {
      throw new Error(errorString(CONSOLE_MESSAGE.MIN_TRY_COUNT_ERROR));
    }
  }
}

export default RacingGameManager;
