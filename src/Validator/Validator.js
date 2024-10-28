const MAX_CAR_NAME_LENGTH = 5;
const ERROR_MESSAGES = {
  EMPTY_INPUT: "[ERROR] 입력값이 없습니다.",
  DUPLICATE_CAR_NAME: "[ERROR] 중복된 자동차 이름이 존재합니다.",
  CAR_NAME_TOO_LONG: "[ERROR] 자동차 이름이 5자를 초과했습니다.",
  TRY_COUNT_NOT_NATURAL: "[ERROR] 시도 횟수는 자연수여야 합니다.",
};

class Validator {
  static #checkNotNullOrEmpty(value) {
    if (value === null || value === undefined) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  }

  static #checkCarNameDuplicate(carNameList) {
    const uniqueCarNameList = new Set(carNameList);
    if (uniqueCarNameList.size !== carNameList.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_CAR_NAME);
    }
  }

  static #checkCarNameLength(carNameList) {
    carNameList.forEach((carName) => {
      if (carName.length > MAX_CAR_NAME_LENGTH) {
        throw new Error(ERROR_MESSAGES.CAR_NAME_TOO_LONG);
      }
    });
  }

  static #checkTryCountIsNatural(tryCount) {
    if (!Number.isInteger(tryCount) || tryCount <= 0) {
      throw new Error(ERROR_MESSAGES.TRY_COUNT_NOT_NATURAL);
    }
  }

  static validateCarNames(carNameList) {
    this.#checkNotNullOrEmpty(carNameList);
    this.#checkCarNameDuplicate(carNameList);
    this.#checkCarNameLength(carNameList);
  }

  static validateTryCount(tryCount) {
    this.#checkNotNullOrEmpty(tryCount);
    this.#checkTryCountIsNatural(tryCount);
  }
}

export default Validator;
