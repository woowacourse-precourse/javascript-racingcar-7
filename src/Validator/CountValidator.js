import ERROR_MESSAGES from '../constants/errorMessages.js';
import handleError from '../utils/handleError.js';

class CountValidator {
  static #isEmptyCount(count) {
    if (count === '') {
      handleError(ERROR_MESSAGES.EMPTY_COUNT);
    }
  }

  static #isNumber(count) {
    if (!Number.isInteger(count)) {
      handleError(ERROR_MESSAGES.NOT_A_NUMBER);
    }
  }

  static #isLessThanOne(count) {
    if (count < 1) {
      handleError(ERROR_MESSAGES.LESS_THAN_ONE);
    }
  }

  static validateCount(inputCount) {
    this.#isEmptyCount(inputCount);

    const count = Number(inputCount);
    this.#isNumber(count);
    this.#isLessThanOne(count);

    return count;
  }
}

export default CountValidator;
