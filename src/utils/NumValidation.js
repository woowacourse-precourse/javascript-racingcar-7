import { INVALID_NUMBER, TOO_BIG_NUMBER } from '../constants/Error.js';

class NumValidation {
  static isValidNum(tryCount) {
    if (tryCount === '0') {
      throw new Error(INVALID_NUMBER);
    }

    if (Number(tryCount) > 20) {
      throw new Error(TOO_BIG_NUMBER);
    }

    return true;
  }
}
export default NumValidation;
