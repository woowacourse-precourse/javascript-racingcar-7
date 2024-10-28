import { MESSAGE, NUMBER } from "../constants.js";

class TryCountValidator {
  static checkPositive(tryCount) {
    if (!Number.isInteger(tryCount) || tryCount < NUMBER.MIN_TRYCOUNT) {
      throw new Error(MESSAGE.ERROR.TYPE);
    }

    return true;
  }

  static checkOverMax(tryCount) {
    if (tryCount > NUMBER.MAX_TRYCOUNT) {
      throw new Error(MESSAGE.ERROR.MAX);
    }
  }
}

export default TryCountValidator;
