import CONDITIONS from "../constants/Conditions.js";
import ERRORS from "../constants/Errors.js";

class Validation {
  static isValidCarName(carNames) {
    const carNameArr = carNames.split(",");

    // 자동차 이름 길이가 1~5자 사이인지 확인
    if (
      carNameArr.some(
        (carName) => carName.length < CONDITIONS.CAR_NAME_MIN_SIZE
      ) ||
      carNameArr.some(
        (carName) => carName.length > CONDITIONS.CAR_NAME_MAX_SIZE
      )
    ) {
      throw new Error(ERRORS.GENERAL);
    }

    // 자동차 이름이 중복되는지 확인
    if (new Set(carNameArr).size !== carNameArr.length) {
      throw new Error(ERRORS.GENERAL);
    }

    // 자동차 이름이 공백만으로 이루어져 있는지 확인
    if (carNameArr.some((carName) => carName.trim() === "")) {
      throw new Error(ERRORS.GENERAL);
    }
  }

  static isValidTotalRound(totalRound) {
    // 시도 횟수가 정수인지 확인
    if (!Number.isInteger(+totalRound)) {
      throw new Error(ERRORS.GENERAL);
    }

    // 시도 횟수가 1 이상인지 확인
    if (totalRound < 1) {
      throw new Error(ERRORS.GENERAL);
    }
  }
}

export default Validation;
