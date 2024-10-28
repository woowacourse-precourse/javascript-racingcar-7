import Constants from './constants';
export default class Validator {
  static validateCarNames(carNames) {
    if (!carNames || carNames.length === 0) {
      throw new Error(Constants.ERROR_MESSAGES.EMPTY_CAR_NAME);
    }

    carNames.forEach((name) => {
      if (name.length > 5 || name.trim() === '') {
        throw new Error(Constants.ERROR_MESSAGES.CAR_NAME_LENGTH);
      }
    });
    return carNames;
  }

  static validateAttemptCount(count) {
    if (isNaN(count) || count <= 0) {
      throw new Error(Constants.ERROR_MESSAGES.INVALID_ATTEMPT_COUNT);
    }
    return count;
  }
}
