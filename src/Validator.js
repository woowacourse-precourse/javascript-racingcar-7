import {
  checkCarNameLength,
  checkConflictingCarName,
  checkEmptyString,
  checkIntegerTryNumber,
  checkMaxCarNumber,
  checkMaxTryNumber,
  checkMinCarNumber,
  checkMinTryNumber,
} from './util/validationUtil.js';

export default class Validator {
  static userInput(input) {
    checkEmptyString(input);
  }

  static carName(cars) {
    checkConflictingCarName(cars);
    checkCarNameLength(cars);
  }

  static carNumber(cars) {
    checkMaxCarNumber(cars);
    checkMinCarNumber(cars);
  }

  static tryNumber(tryNumber) {
    checkIntegerTryNumber(tryNumber);
    checkMinTryNumber(tryNumber);
    checkMaxTryNumber(tryNumber);
  }
}
