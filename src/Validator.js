import { ERROR_MESSAGE } from './constant';

class Validator {
  #value;
  constructor(value) {
    this.#value = value;
  }

  #validatePositiveNumbers() {
    if (this.#value <= 0) {
      throw Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
    }
  }

  static validate(value) {
    const validator = new Validator(value);
    if (typeof validator.#value === 'number') {
      validator.#validatePositiveNumbers();
    }
  }
}

export default Validator;
