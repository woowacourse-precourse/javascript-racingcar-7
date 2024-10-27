import { ERROR_MESSAGE, REGEXP } from './Constants.js';

class Validator {
  validateName(inputCarNames) {
    const carNames = inputCarNames.split(',').map(name => name.trim());

    this.validateCarNameLength(carNames);
    this.validateNameCharacters(carNames);
    this.validateNameStartsWithNumber(carNames);
  }

  validateCarNameLength(carNames) {
    const isNameLengthValid = carNames.every(
      name => name.length > 0 && name.length <= 5,
    );

    if (!isNameLengthValid) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_VALIDATION);
    }
  }

  validateNameCharacters(carNames) {
    const isCarNameValid = carNames.every(name =>
      REGEXP.CAR_NAME_VALID_CHARACTERS.test(name),
    );

    if (!isCarNameValid) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_ALLOWED_CHARACTERS);
    }
  }

  validateNameStartsWithNumber(carNames) {
    const isStartsWithNumber = carNames.some(name =>
      REGEXP.STARTS_WITH_NUMBER.test(name),
    );

    if (isStartsWithNumber) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_STARTS_WITH_NUMBER);
    }
  }

  validateMoveAttempts(inputMoveAttempts) {
    const moveAttempts = Number(inputMoveAttempts);

    if (Number.isNaN(moveAttempts)) {
      throw new Error(ERROR_MESSAGE.MOVE_ATTEMPTS_MUST_BE_NUMBER);
    }
    if (moveAttempts <= 0) {
      throw new Error(ERROR_MESSAGE.MOVE_ATTEMPTS_MUST_BE_GREATER_THAN_ZERO);
    }
  }
}

export default Validator;
