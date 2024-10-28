import { ERROR_MESSAGE } from './constant';

class Validator {
  #value;
  constructor(value) {
    this.#value = value;
  }

  #validatePositiveNumber() {
    if (this.#value <= 0) {
      throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
    }
  }

  #validateNoDuplicates() {
    const hasDuplicates = new Set(value).size !== this.#value.length;
    if (hasDuplicates) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
    }
  }

  static validate(value) {
    const validator = new Validator(value);
    if (typeof validator.#value === 'number') {
      validator.#validatePositiveNumber();
    } else if (typeof validator.#value === 'object') {
      validator.#validateNoDuplicates();
    }
  }
}

export default Validator;
