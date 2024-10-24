import {
  ERROR_MESSAGE_CAR_NAME_OVER_FIVE,
  INPUT_MESSAGE_CAR_NAMES,
  INPUT_MESSAGE_TRY_COUNT,
} from "./constants";
import {
  readLineAsync,
  splitIntoArray,
  validatePositiveInteger,
  validateStringArrayLength,
} from "./utils";

class Input {
  static #MAX_CAR_NAME_LENGTH = 5;

  #carNames;
  #tryCount;

  async getUserInput() {
    this.#carNames = await readLineAsync(INPUT_MESSAGE_CAR_NAMES);
    this.#tryCount = await readLineAsync(INPUT_MESSAGE_TRY_COUNT);
  }

  processCarNames() {
    const carNameArray = splitIntoArray(this.#carNames, ",");
    this.validateCarNameLength(carNameArray);
    return carNameArray;
  }

  processTryCount() {
    const tryCount = +this.#tryCount;
    validatePositiveInteger(tryCount);
    return tryCount;
  }

  validateCarNameLength(carNameArray) {
    try {
      validateStringArrayLength(carNameArray, Input.#MAX_CAR_NAME_LENGTH);
    } catch (e) {
      throw new Error(ERROR_MESSAGE_CAR_NAME_OVER_FIVE);
    }
  }
}

export default Input;
