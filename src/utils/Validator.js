import { ERROR_MESSAGE } from "./constants.js";

class Validator {
  static validateCarNames(names) {
    this.validateDuplicateCarName(names);
    names.forEach(this.validateCarName);
  }

  static validateCarName(name) {
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH);
    }
    if (!name || name.trim().length === 0) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_IS_EMPTY);
    }
  }

  static validateDuplicateCarName(names) {
    const uniqueNames = new Set(names); // Set은 중복 허용 x
    if (uniqueNames.size !== names.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
    }
  }

  static validateTryCount(countInput) {
    const count = Number(countInput);

    if (count <= 0) {
      throw new Error(ERROR_MESSAGE.TRY_COUNT_NUMBER_POSITIVE);
    }

    if (Number.isNaN(count)) {
      throw new Error(ERROR_MESSAGE.TRY_COUNT_IS_NUMBER);
    }

    return count;
  }
}

export default Validator;
