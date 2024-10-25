import {
  ERROR_MESSAGE_CAR_NAME_DUPLICATION,
  ERROR_MESSAGE_CAR_NAME_INVALID,
  ERROR_MESSAGE_USER_INPUT,
  INPUT_MESSAGE_CAR_NAMES,
  INPUT_MESSAGE_TRY_COUNT,
} from "./constants.js";
import {
  checkArrayAllUnique,
  readLineAsync,
  splitIntoArray,
  validatePositiveInteger,
} from "./utils.js";

class Input {
  static #CAR_NAME_REGEXP = /^\w{1,5}$/;
  static #SEPARATOR = ",";

  #rawCarNames;
  #rawTryCount;

  constructor() {
    this.#rawCarNames = "";
    this.#rawTryCount = "";
  }

  async getUserInput() {
    try {
      this.#rawCarNames = await readLineAsync(INPUT_MESSAGE_CAR_NAMES);
      this.#rawTryCount = await readLineAsync(INPUT_MESSAGE_TRY_COUNT);
    } catch (e) {
      throw new Error(ERROR_MESSAGE_USER_INPUT);
    }
  }

  parseCarNames() {
    const carNameArray = splitIntoArray(this.#rawCarNames, Input.#SEPARATOR);
    this.#validateCarNameArray(carNameArray);
    return carNameArray;
  }

  parseTryCount() {
    const tryCount = +this.#rawTryCount;
    validatePositiveInteger(tryCount);
    return tryCount;
  }

  #validateCarNameArray(carNameArray) {
    const isAllCarNameValid = carNameArray.every((carName) =>
      Input.#CAR_NAME_REGEXP.test(carName)
    );
    if (!isAllCarNameValid) throw new Error(ERROR_MESSAGE_CAR_NAME_INVALID);

    const isAllCarNameUnique = checkArrayAllUnique(carNameArray);
    if (!isAllCarNameUnique)
      throw new Error(ERROR_MESSAGE_CAR_NAME_DUPLICATION);
  }
}

export default Input;
