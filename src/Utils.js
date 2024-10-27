import { ERROR_MESSAGE } from "./content.js";
import RacingCar from "./RacingCar.js";
class Utils {
  constructor() {
    this.carInput;
    this.tryNum;
    this.carName = {};
  }
  carCountLimitCheck(carInput) {
    if (carInput.length < 5) {
      // 자동차 개수 체크 5이하만 가능
      return this.carNameLimitCheck(carInput);
    } else {
      throw new Error(ERROR_MESSAGE.INCORRECT_VALUE);
    }
  }
  carNameLimitCheck(carInput) {
    //글자 수 제한
    for (const car in carInput) {
      if (car.length <= 5) {
        return this.checkSpace(carInput);
      } else {
        throw new Error(ERROR_MESSAGE.NAME_LIMIT);
      }
    }
  }

  checkSpace(carInput) {
    // 공백 확인
    if (/\s/.test(carInput) || carInput.includes("")) {
      throw new Error(ERROR_MESSAGE.INCORRECT_VALUE);
    } else {
      return this.duplicateCheck(carInput);
    }
  }
  duplicateCheck(carInput) {
    // 중복 검사
    const carName = {};
    for (const i of carInput) {
      if (i in carName) {
        throw new Error(ERROR_MESSAGE.DUPLICATE_VALUE);
      } else {
        carName[i] = 0;
      }
    }
    return carName;
  }
  checkTryNum(tryNum) {
    // 시도 횟수 유효성 검사
    if (/^[0-9]+$/.test(tryNum)) {
      return this.limitingNum(tryNum);
    } else {
      throw new Error(ERROR_MESSAGE.ONLY_INTGER);
    }
  }
}

export default Utils;
