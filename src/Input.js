import {
  ERROR_MESSAGE_CAR_NAME_DUPLICATION,
  ERROR_MESSAGE_CAR_NAME_INVALID,
  ERROR_MESSAGE_USER_INPUT,
  INPUT_MESSAGE_CAR_NAMES,
  INPUT_MESSAGE_TRY_COUNT,
} from "./constants";
import {
  checkArrayAllUnique,
  readLineAsync,
  splitIntoArray,
  validatePositiveInteger,
} from "./utils";

class Input {
  static #CAR_NAME_REGEXP = /^\w{1,5}$/;
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
    this.validateCarNameArray(carNameArray);
    return carNameArray;
  }

  processTryCount() {
    const tryCount = +this.#tryCount;
    validatePositiveInteger(tryCount);
    return tryCount;
  }

  validateCarNameArray(carNameArray) {
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
