import { CAR_NAME_ERROR } from "../Message/Message.js";

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
      throw new Error(CAR_NAME_ERROR.MIN_CARS);
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
      throw new Error(CAR_NAME_ERROR.EMPTY_NAME);
    }
  }

  static checkNameLength(name) {
    if (name.trim().length > 5) {
      throw new Error(CAR_NAME_ERROR.OVER_FIVE_LENGTH);
    }
  }

  static validateDuplicateNames(carNameArray) {
    // 중복된 이름이 있는지 확인
    const nameSet = new Set(carNameArray);
    if (nameSet.size !== carNameArray.length) {
      throw new Error(CAR_NAME_ERROR.DUPLICATE_NAME);
    }
  }
}

export default CarNameValidator;
