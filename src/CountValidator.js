import ERROR_MESSAGES from './constants/errorMessages.js';
import handleError from './utils/handleError.js';

class CountValidator {
  constructor(inputCount) {
    this.count = Number(inputCount);
  }

  #isNumber() {
    if (!Number.isInteger(this.count)) {
      handleError(ERROR_MESSAGES.NOT_A_NUMBER);
    }
  }

  #isLessThanOne() {
    if (this.count < 1) {
      handleError(ERROR_MESSAGES.LESS_THAN_ONE);
    }
  }

  validateCount() {
    this.#isNumber();
    this.#isLessThanOne();

    return this.count;
  }
}

export default CountValidator;
