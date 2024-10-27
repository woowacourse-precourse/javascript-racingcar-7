import ERROR_MESSAGES from './constants/errorMessages.js';

class CountValidator {
  constructor(inputCount) {
    this.count = Number(inputCount);
  }

  #isNumber() {
    if (!Number.isInteger(this.count)) {
      throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    }
  }

  #isLessThanOne() {
    if (this.count < 1) {
      throw new Error(ERROR_MESSAGES.LESS_THAN_ONE);
    }
  }

  validateCount() {
    this.#isNumber();
    this.#isLessThanOne();

    return this.count;
  }
}

export default CountValidator;
