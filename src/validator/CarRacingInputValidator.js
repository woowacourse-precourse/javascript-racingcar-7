import ERROR_MESSAGES from '../utills/errors.js';

class CarRacingInputValidator {
  static validateNotEmpty(input) {
    if (!input.trim()) {
      throw new Error(ERROR_MESSAGES.INPUT.EMPTY_INPUT);
    }
  }

  static validateCarNames(input) {
    const carNames = input.split(',');

    carNames.forEach((name) => {
      if (!name.trim()) {
        throw new Error(ERROR_MESSAGES.INPUT.EMPTY_CAR_NAME);
      }
      if (name.length > 5) {
        throw new Error(ERROR_MESSAGES.INPUT.INVALID_CAR_NAME);
      }
    });

    const uniqueNames = new Set(carNames);
    if (uniqueNames.size !== carNames.length) {
      throw new Error(ERROR_MESSAGES.INPUT.DUPLICATE_CAR_NAME);
    }
  }

  static validateTotalRounds(input) {
    const parsedInput = parseInt(input, 10);

    if (isNaN(parsedInput)) {
      throw new Error(ERROR_MESSAGES.INPUT.INVALID_NUMBER);
    }
    if (parsedInput <= 0) {
      throw new Error(ERROR_MESSAGES.INPUT.INVALID_ROUNDS);
    }
  }
}

export default CarRacingInputValidator;
