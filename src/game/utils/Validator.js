export default class Validator {
  static #ERROR_EMPTY_CAR_NAME = '[ERROR] 자동차 이름에 공백을 입력하였습니다.';
  static #ERROR_CAR_NAME_TOO_LONG =
    '[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.';
  static #ERROR_DUPLICATE_CAR_NAME = '[ERROR] 중복된 자동차 이름 :';
  static #ERROR_INVALID_TOTAL_ROUNDS =
    '[ERROR] 시도 횟수는 1 이상의 정수를 입력해야 합니다.';

  static validateCarNames(carNames) {
    carNames.forEach((carName) => {
      this.validateCarNameWhitespace(carName);
      this.validateCarNameLength(carName);
    });
    this.validateDuplicateCarName(carNames);
  }

  static validateCarNameWhitespace(carName) {
    if (carName == '') {
      throw new Error(this.#ERROR_EMPTY_CAR_NAME);
    }
  }

  static validateCarNameLength(carName) {
    if (carName.length > 5) {
      throw new Error(this.#ERROR_CAR_NAME_TOO_LONG);
    }
  }

  static validateDuplicateCarName(carNames) {
    const uniqueCarNames = new Set();

    carNames.forEach((carName) => {
      if (uniqueCarNames.has(carName)) {
        throw new Error(`${this.#ERROR_DUPLICATE_CAR_NAME} ${carName}`);
      }

      uniqueCarNames.add(carName);
    });
  }

  static validateTotalRounds(totalRounds) {
    const isValid = /^\d+$/.test(totalRounds);
    if (!isValid || Number(totalRounds) === 0) {
      throw new Error(this.#ERROR_INVALID_TOTAL_ROUNDS);
    }
  }
}
