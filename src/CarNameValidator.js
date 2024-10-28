class CarNameValidator {
  static checkBlank(carNames) {
    const hasBlankName = carNames.some((carName) => !carName.trim().length);

    if (hasBlankName) {
      throw new Error("[ERROR]자동차 이름을 입력해주세요.");
    }

    return true;
  }

  static checkDuplication(carNames) {
    const differentNames = new Set(carNames);

    if (differentNames.size < carNames.length) {
      throw new Error("[ERROR]서로 다른 이름을 입력해주세요.");
    }

    return true;
  }

  static checkMultiple(carNames) {
    if (carNames.length < 2) {
      throw new Error("[ERROR]2대 이상의 자동차를 콤마(,)로 구분해서 입력해주세요.");
    }

    return true;
  }

  static checkNameLength(carNames) {
    const hasLongName = carNames.some((carName) => carName.length > 5);

    if (hasLongName) {
      throw new Error("[ERROR]자동차 이름은 5자 이하로 입력해주세요.");
    }

    return true;
  }
}

export default CarNameValidator;
