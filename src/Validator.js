import { ERROR_MESSAGE, MAX_INPUT_LENGTH } from './constant';

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

  #validateMaxLength() {
    this.#value.forEach((value) => {
      if (value.length > MAX_INPUT_LENGTH) {
        throw new Error(ERROR_MESSAGE.NAME_TOO_LONG);
      }
    });
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
      validator.#validateMaxLength();
      validator.#validateNoDuplicates();
    }
  }
}

export default Validator;
