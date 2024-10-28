import { ERROR_MESSAGES } from './constants/messages.js';

class InputValidator {
  static validateParticipantNames(input) {
    if (!input.includes(',')) {
      throw new Error(ERROR_MESSAGES.NOT_ENOUGH_PATICIPANTS);
    }
    if (input[0] === ',' || input.at(-1) === ',') {
      throw new Error(ERROR_MESSAGES.INVALID_COMMA);
    }

    input.split('').forEach((char) => {
      if (
        !(
          (char >= '0' && char <= '9') ||
          (char >= 'A' && char <= 'Z') ||
          (char >= 'a' && char <= 'z') ||
          char === ','
        )
      ) {
        throw new Error(ERROR_MESSAGES.INVALID_NAME);
      }
    });

    const names = input.split(',');
    if (names.length !== new Set(names).size) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NAME);
    }

    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error(ERROR_MESSAGES.EXCEED_NAME_LENGTH);
      }
    });

    return names;
  }

  static validateTryCount(input) {
    const tryCount = Number(input);
    if (!Number.isInteger(tryCount) || tryCount <= 0) {
      throw new Error(ERROR_MESSAGES.INVALID_COUNT);
    }
    return tryCount;
  }
}

export default InputValidator;
