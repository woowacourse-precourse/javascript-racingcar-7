import {
  ERROR_MESSAGE_CAR_NAME_DUPLICATION,
  ERROR_MESSAGE_CAR_NAME_INVALID,
  ERROR_MESSAGE_USER_INPUT,
  INPUT_MESSAGE_CAR_NAMES,
  INPUT_MESSAGE_TRY_COUNT,
} from './lib/constants.js';
import {
  checkArrayAllUnique,
  readLineAsync,
  splitIntoArray,
  validatePositiveInteger,
} from './lib/utils.js';

class Input {
  static #CAR_NAME_REGEXP = /^\w{1,5}$/;
  static #SEPARATOR = ',';

  #rawCars;
  #rawTryCount;

  constructor() {
    this.#rawCars = '';
    this.#rawTryCount = '';
  }

  async getUserInput() {
    try {
      this.#rawCars = await readLineAsync(INPUT_MESSAGE_CAR_NAMES);
      this.#rawTryCount = await readLineAsync(INPUT_MESSAGE_TRY_COUNT);
    } catch (e) {
      throw new Error(ERROR_MESSAGE_USER_INPUT);
    }
  }

  parseCars() {
    const carArray = splitIntoArray(this.#rawCars, Input.#SEPARATOR);
    this.#validateCarArray(carArray);
    return carArray;
  }

  parseTryCount() {
    const tryCount = +this.#rawTryCount;
    validatePositiveInteger(tryCount);
    return tryCount;
  }

  #validateCarArray(carArray) {
    const isAllCarValid = carArray.every(car =>
      Input.#CAR_NAME_REGEXP.test(car),
    );
    if (!isAllCarValid) throw new Error(ERROR_MESSAGE_CAR_NAME_INVALID);

    const isAllCarUnique = checkArrayAllUnique(carArray);
    if (!isAllCarUnique) throw new Error(ERROR_MESSAGE_CAR_NAME_DUPLICATION);
  }
}

export default Input;
