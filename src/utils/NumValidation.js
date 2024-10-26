import {
  NOT_NUMBER,
  INVALID_NUMBER,
  TOO_BIG_NUMBER,
} from '../constants/Error.js';

class NumValidation {
  static isValidNum(tryCount) {
    if (Number.isNaN(tryCount) === false) {
      throw new Error(NOT_NUMBER);
    }
    if (tryCount === '0') {
      throw new Error(INVALID_NUMBER);
    }

    if (Number(tryCount) > 100) {
      throw new Error(TOO_BIG_NUMBER);
    }

    return true;
  }
}
export default NumValidation;
