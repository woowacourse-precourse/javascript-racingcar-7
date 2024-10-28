// 유효성 검증
class CarNameValidator {
  static validate(carNameArray) {
    this.validateMinCars(carNameArray);
    this.validateCarNames(carNameArray);
    this.validateDuplicateNames(carNameArray);
  }

  static validateMinCars(carNameArray) {
    // 자동차가 1대 이하인지 확인
    if (carNameArray.length < 2) {
      throw new Error("[ERROR] 경주할 자동차는 최소 2대 이상이어야 합니다.");
    }
  }

  static validateCarNames(carNameArray) {
    for (const name of carNameArray) {
      // 자동차 이름이 빈 값인지 확인
      this.checkEmptyName(name);
      // 자동차 이름이 5자 이하인지 확인
      this.checkNameLength(name);
    }
  }

  static checkEmptyName(name) {
    if (name.trim() === "") {
      throw new Error("[ERROR] 자동차 이름은 빈 값일 수 없습니다.");
    }
  }

  static checkNameLength(name) {
    if (name.trim().length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.");
    }
  }

  static validateDuplicateNames(carNameArray) {
    // 중복된 이름이 있는지 확인
    const nameSet = new Set(carNameArray);
    if (nameSet.size !== carNameArray.length) {
      throw new Error("[ERROR] 자동차 이름에 중복된 값이 있습니다.");
    }
  }
}

export default CarNameValidator;
