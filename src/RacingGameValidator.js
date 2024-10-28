import { ERROR_MESSAGES } from "./constants/errorMessages.js";

class RacingGameValidator {
  static validateCarNameLengthUnderSix(carNames) {
    carNames.forEach((car) => {
      if (car.length > 5) throw Error(ERROR_MESSAGES.CAR_NAME_LENGTH_OVER_FIVE);
    });
  }

  static validateCarNumberOverOne(carNames) {
    if (carNames.length < 2) throw Error(ERROR_MESSAGES.CAR_NUMBER_UNDER_TWO);
  }

  static validateTryCountIsNumber(tryCount) {
    if (isNaN(tryCount)) throw Error(ERROR_MESSAGES.TRY_COUNT_IS_NOT_NUMBER);
  }

  static validateTryCountOverZero(tryCount) {
    if (tryCount === 0) throw Error(ERROR_MESSAGES.TRY_COUNT_UNDER_ZERO);
  }

  static validateTryCountIsPositiveNumber(tryCount) {
    if (tryCount < 0) throw Error(ERROR_MESSAGES.TRY_COUNT_IS_NEGATIVE_NUMBER);
  }
}

export default RacingGameValidator;
