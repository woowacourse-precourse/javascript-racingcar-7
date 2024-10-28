import { ERROR_MESSAGES } from "./constants/errorMessages.js";

class RacingGameValidator {
  static carNameLengthUnderSix(carNames) {
    carNames.forEach((car) => {
      if (car.length > 5) throw Error(ERROR_MESSAGES.CAR_NAME_LENGTH_OVER_FIVE);
    });
  }

  static carNumberOverOne(carNames) {
    if (carNames.length < 2) throw Error(ERROR_MESSAGES.CAR_NUMBER_UNDER_TWO);
  }

  static tryCountIsNumber(tryCount) {
    if (isNaN(tryCount)) throw Error(ERROR_MESSAGES.TRY_COUNT_IS_NOT_NUMBER);
  }

  static tryCountOverZero(tryCount) {
    if (tryCount === 0) throw Error(ERROR_MESSAGES.TRY_COUNT_UNDER_ZERO);
  }

  static tryCountIsPositiveNumber(tryCount) {
    if (tryCount < 0) throw Error(ERROR_MESSAGES.TRY_COUNT_IS_NEGATIVE_NUMBER);
  }
}

export default RacingGameValidator;
