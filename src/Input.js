import {
  ERROR_MESSAGE_CAR_NAME_OVER_FIVE,
  ERROR_MESSAGE_CAR_NAME_OVER_MAX,
  ERROR_MESSAGE_CAR_NAME_UNDER_MIN,
  ERROR_MESSAGE_OVER_MAX_LENGTH,
  ERROR_MESSAGE_USER_INPUT,
  INPUT_MESSAGE_CAR_NAMES,
  INPUT_MESSAGE_TRY_COUNT,
} from "./constants";
import {
  readLineAsync,
  splitIntoArray,
  validatePositiveInteger,
} from "./utils";

class Input {
  static #MIN_CAR_NAME_LENGTH = 1;
  static #MAX_CAR_NAME_LENGTH = 5;
  static #SEPARATOR = ",";

  #carNames;
  #tryCount;

  constructor() {
    this.#carNames = "";
    this.#tryCount = "";
  }

  async getUserInput() {
    try {
      this.#carNames = await readLineAsync(INPUT_MESSAGE_CAR_NAMES);
      this.#tryCount = await readLineAsync(INPUT_MESSAGE_TRY_COUNT);
    } catch (e) {
      throw new Error(ERROR_MESSAGE_USER_INPUT);
    }
  }

  processCarNames() {
    const carNameArray = splitIntoArray(this.#carNames, Input.#SEPARATOR);
    this.validateCarNameLength(carNameArray);
    return carNameArray;
  }

  processTryCount() {
    const tryCount = +this.#tryCount;
    validatePositiveInteger(tryCount);
    return tryCount;
  }

  validateCarNameLength(carNameArray) {
    for (const carName of carNameArray) {
      const carNameLength = carName.length;
      if (carNameLength < Input.#MIN_CAR_NAME_LENGTH)
        throw new Error(ERROR_MESSAGE_CAR_NAME_UNDER_MIN);
      if (carNameLength > Input.#MAX_CAR_NAME_LENGTH)
        throw new Error(ERROR_MESSAGE_CAR_NAME_OVER_MAX);
    }
  }
}

export default Input;
