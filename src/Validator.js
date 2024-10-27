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

  static car(cars) {
    checkConflictingCarName(cars);
    checkCarNameLength(cars);
    checkMaxCarNumber(cars);
    checkMinCarNumber(cars);
  }

  static tryNumber(tryNumber) {
    checkIntegerTryNumber(tryNumber);
    checkMinTryNumber(tryNumber);
    checkMaxTryNumber(tryNumber);
  }
}
