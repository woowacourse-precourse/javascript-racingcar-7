import { ERROR_MESSAGE, NUMBER } from "./Constants/constants.js";

export class Validator {
  static carNameLength(arr) {
    if (arr.some((name) => name.length < NUMBER.CAR_NAME_MIN)) {
      throw new Error(ERROR_MESSAGE.TAG + ERROR_MESSAGE.CAR_NAME_TOO_SHORT);
    }

    if (arr.some((name) => name.length > NUMBER.CAR_NAME_MAX)) {
      throw new Error(ERROR_MESSAGE.TAG + ERROR_MESSAGE.CAR_NAME_TOO_LONG);
    }
  }

  static carNameSame(arr) {
    if (new Set(arr).size !== arr.length) {
      throw new Error(ERROR_MESSAGE.TAG + ERROR_MESSAGE.CAR_NAME_SAME);
    }
  }

  static isNumber(number) {
    if (!Number.isInteger(number)) {
      throw new Error(ERROR_MESSAGE.TAG + ERROR_MESSAGE.NOT_NUMBER);
    }
  }

  static attemptMin(number) {
    if (number < NUMBER.ATTEMPT_MIN) {
      throw new Error(ERROR_MESSAGE.TAG + ERROR_MESSAGE.ATTEMPT_MIN);
    }
  }
}
