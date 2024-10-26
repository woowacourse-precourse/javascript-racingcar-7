import { ERROR_MESSAGE } from "../constants/messages.js";

class Validator {
  static checkName(carName) {
    Validator.#checkNameLength(carName);
  }

  static #checkNameLength(carName) {
    if (carName.length < 1) {
      throw new Error(ERROR_MESSAGE.NAME_TOO_SHORT);
    }

    if (carName.length > 5) {
      throw new Error(ERROR_MESSAGE.NAME_TOO_LONG);
    }
  }
}

export default Validator;
