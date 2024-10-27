class InputValidator {
  static isPositiveNumber(number) {
    return Number.isInteger(number) && number > 0;
  }

  static hasNoName(carNames) {
    return carNames.some((carName) => carName.trim().length === 0);
  }

  static hasSameName(carNames) {
    const differentNames = new Set(carNames);
    if (differentNames.size < carNames.length) {
      return true;
    }

    return false;
  }

  static hasSingleName(carNames) {
    return carNames.length < 2;
  }

  static hasLongName(carNames) {
    return carNames.some((carName) => carName.length > 5);
  }
}

export default InputValidator;
