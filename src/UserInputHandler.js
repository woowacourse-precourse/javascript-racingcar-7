import { CONSOLE_MESSAGE, ERROR_MESSAGE } from './constant.js';
import {
  errorString,
  getUserInput,
  isIntegerNumber,
  isNumber,
  isPositiveNumber,
} from './util.js';

class UserInputHandler {
  static MAX_CAR_COUNT = 50;
  static MAX_TRY_COUNT = 500;

  async getCarNames() {
    const carInput = await getUserInput(CONSOLE_MESSAGE.CAR_INPUT_MESSAGE);
    this.#validateCarInput(carInput);

    return carInput.split(',').map((carName) => carName.trim());
  }

  async getTryCount() {
    const tryCountInput = await getUserInput(
      CONSOLE_MESSAGE.TRY_COUNT_INPUT_MESSAGE,
    );
    this.#validateTryCountInput(tryCountInput);

    return Number(tryCountInput);
  }

  #validateCarInput(input) {
    if (!input.includes(',')) {
      throw new Error(errorString(ERROR_MESSAGE.MIN_CAR_COUNT));
    }

    const carNames = input.split(',').map((carName) => carName.trim());
    const deduplicatedCarNames = new Set(carNames);
    if (carNames.length !== deduplicatedCarNames.size) {
      throw new Error(errorString(ERROR_MESSAGE.DUPLICATED_CAR_NAME));
    }

    if (carNames.length > UserInputHandler.MAX_CAR_COUNT) {
      throw new Error(
        errorString(
          `경주할 자동차는 ${UserInputHandler.MAX_CAR_COUNT}대 이하만 가능합니다.`,
        ),
      );
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

    if (parsedTryCount > UserInputHandler.MAX_TRY_COUNT) {
      throw new Error(
        errorString(
          `시도 횟수는 ${UserInputHandler.MAX_TRY_COUNT} 이하만 가능합니다.`,
        ),
      );
    }
  }
}

export default UserInputHandler;
