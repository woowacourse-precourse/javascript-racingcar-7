import { ERROR_MESSAGE } from '../constants/Message.js';

class AttemptValidator {
  static validate(roundAttempt) {
    if (roundAttempt === '') {
      throw new Error(ERROR_MESSAGE.EMPTY_ATTEMPT);
    }

    if (Number.isNaN(roundAttempt)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }

    if (Number.isInteger(roundAttempt) === false) {
      throw new Error(ERROR_MESSAGE.NOT_AN_INTEGER);
    }

    if (roundAttempt < 1) {
      throw new Error(ERROR_MESSAGE.LESS_THAN_ONE);
    }
  }
}

export default AttemptValidator;
