import {
  NOT_NUMBER,
  INVALID_NUMBER,
  TOO_BIG_NUMBER,
} from '../constants/Error.js';

class NumValidation {
  static isValidNum(tryCount) {
    if (Number.isNaN(Number(tryCount))) {
      throw new Error(NOT_NUMBER);
    }
    const count = Number(tryCount);

    if (count === 0) {
      throw new Error(INVALID_NUMBER);
    }

    if (count > 100) {
      throw new Error(TOO_BIG_NUMBER);
    }
    return true;
  }
}
export default NumValidation;
