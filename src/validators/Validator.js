import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import { MAX_NAME_LENGTH } from '../constants/gameRules.js';

class Validator {
  static checkRoundCount(roundCount) {
    if (Number.isNaN(roundCount)) {
      throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    }

    if (roundCount === 0) {
      throw new Error(ERROR_MESSAGES.ZERO_OR_EMPTY);
    }

    if (roundCount < 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    if (!Number.isSafeInteger(roundCount)) {
      throw new Error(ERROR_MESSAGES.UNSAFE_INTEGER);
    }
  }

  static checkNames(names) {
    names.forEach((name) => {
      if (name.length > MAX_NAME_LENGTH) {
        throw new Error(ERROR_MESSAGES.NAME_TOO_LONG);
      }

      if (!/^[a-zA-Z]+$/.test(name)) {
        throw new Error(ERROR_MESSAGES.NAME_NOT_ALPHABET);
      }
    });

    if (names.length === 1) {
      throw new Error(ERROR_MESSAGES.SINGLE_PLAYER);
    }

    const nameSet = new Set(names);
    if (nameSet.size !== names.length) {
      throw new Error(ERROR_MESSAGES.SAME_NAMES);
    }
  }
}

export default Validator;
