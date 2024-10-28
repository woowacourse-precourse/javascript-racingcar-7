import { MESSAGE, NUMBER } from "../constants.js";

class CarNameValidator {
  static checkBlank(carNames) {
    const hasBlankName = carNames.some((carName) => !carName.trim().length);

    if (hasBlankName) {
      throw new Error(MESSAGE.ERROR.BLANK);
    }

    return true;
  }

  static checkDuplication(carNames) {
    const differentNames = new Set(carNames);

    if (differentNames.size < carNames.length) {
      throw new Error(MESSAGE.ERROR.DUPLICATION);
    }

    return true;
  }

  static checkMultiple(carNames) {
    if (carNames.length < NUMBER.MIN_NAME_COUNT) {
      throw new Error(MESSAGE.ERROR.NUMBER_OF_NAME);
    }

    return true;
  }

  static checkNameLength(carNames) {
    const hasLongName = carNames.some((carName) => carName.length > NUMBER.MAX_NAME_LENGTH);

    if (hasLongName) {
      throw new Error(MESSAGE.ERROR.LENGTH);
    }

    return true;
  }
}

export default CarNameValidator;
