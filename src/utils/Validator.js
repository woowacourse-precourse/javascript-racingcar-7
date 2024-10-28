import Constants from './constants.js';
class Validator {
  static validateCarNames(carNames) {
    if (!carNames || carNames.trim() === "") {
      throw new Error(Constants.ERROR_MESSAGES.EMPTY_CAR_NAME);
    }
    const names = carNames.split(",");
    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error(Constants.ERROR_MESSAGES.CAR_NAME_LENGTH);
      }
      if (name.trim() === "") {
        throw new Error(Constants.ERROR_MESSAGES.EMPTY_CAR_NAME);
      }
    });
  }

  static validateAttemptCount(attemptCount) {
    if (isNaN(attemptCount) || attemptCount <= 0) {
      throw new Error(Constants.ERROR_MESSAGES.INVALID_ATTEMPT_COUNT);
    }
  }
}

export default Validator;