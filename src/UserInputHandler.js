import { Console } from '@woowacourse/mission-utils';
import {
  CONSOLE_MESSAGE,
  ERROR_MESSAGE,
  MAX_CAR_COUNT,
  MAX_TRY_COUNT,
} from './constant.js';
import {
  errorString,
  isInputEmpty,
  isIntegerNumber,
  isNumber,
  isPositiveNumber,
} from './util.js';

class UserInputHandler {
  async getCarNames() {
    try {
      const carInput = await this.#getUserInput(
        CONSOLE_MESSAGE.CAR_INPUT_MESSAGE,
      );
      this.#validateCarInput(carInput);

      return carInput.split(',').map((carName) => carName.trim());
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getTryCount() {
    try {
      const tryCountInput = await this.#getUserInput(
        CONSOLE_MESSAGE.TRY_COUNT_INPUT_MESSAGE,
      );
      this.#validateTryCountInput(tryCountInput);

      return Number(tryCountInput);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  #getUserInput = async (message) => {
    const input = await Console.readLineAsync(message);
    if (!input || isInputEmpty(input)) {
      throw new Error(errorString(ERROR_MESSAGE.EMPTY_INPUT));
    }

    return input;
  };

  #validateCarInput(input) {
    if (!input.includes(',')) {
      throw new Error(errorString(ERROR_MESSAGE.MIN_CAR_COUNT));
    }

    const carNames = input.split(',').map((carName) => carName.trim());
    const deduplicatedCarNames = new Set(carNames);
    if (carNames.length !== deduplicatedCarNames.size) {
      throw new Error(errorString(ERROR_MESSAGE.DUPLICATED_CAR_NAME));
    }

    if (carNames.length > MAX_CAR_COUNT) {
      throw new Error(errorString(ERROR_MESSAGE.MAX_CAR_COUNT));
    }
  }

  #validateTryCountInput(input) {
    const parsedTryCount = Number(input);

    if (!isNumber(parsedTryCount)) {
      throw new Error(errorString(ERROR_MESSAGE.INVALID_TRY_COUNT_TYPE));
    }

    if (!isPositiveNumber(parsedTryCount) || !isIntegerNumber(parsedTryCount)) {
      throw new Error(errorString(ERROR_MESSAGE.MIN_TRY_COUNT));
    }

    if (parsedTryCount > MAX_TRY_COUNT) {
      throw new Error(errorString(ERROR_MESSAGE.MAX_TRY_COUNT));
    }
  }
}

export default UserInputHandler;
