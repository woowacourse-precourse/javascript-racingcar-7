import { ERROR_MESSAGES } from '../constants.js';

class Validator {
  static validateCarNames(names) {
    if (!this.validateNameLengths(names)) {
      throw new Error(ERROR_MESSAGES.INVALID_CAR_NAME_LENGTH);
    }
    if (!this.validateNoEmptyNames(names)) {
      throw new Error(ERROR_MESSAGES.EMPTY_CAR_NAME);
    }
    if (!this.validateNoDuplicateNames(names)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_CAR_NAME);
    }
  }

  static validateNameLengths(names) {
    return names.every((name) => name.length <= 5);
  }

  static validateNoEmptyNames(names) {
    return names.every((name) => name.trim() !== '');
  }

  static validateNoDuplicateNames(names) {
    return new Set(names).size === names.length;
  }

  static validateTryCount(count) {
    if (!Number.isInteger(count) || count <= 0) {
      throw new Error(ERROR_MESSAGES.INVALID_TRY_COUNT);
    }
  }
}

export default Validator;
