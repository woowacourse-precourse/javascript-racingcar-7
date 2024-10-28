import { MESSAGE, NUMBER } from "./constants";

class InputValidator {
  static checkPositive(number) {
    if (!Number.isInteger(number) || number < NUMBER.MIN_TRYCOUNT) {
      throw new Error(MESSAGE.ERROR.TYPE);
    }

    return true;
  }

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
      throw new Error(MESSAGE.ERROR.NUMBER_OF_INPUT);
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

export default InputValidator;
