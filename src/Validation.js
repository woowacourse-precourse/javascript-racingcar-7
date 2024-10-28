class Validation {
  static ERROR_MESSAGE = {
    CAR_NAME_LENGTH_ERROR:
      '차량 이름 길이가 잘못되었습니다! 각 차량 이름은 1글자 이상 5글자 이하로 입력해주세요!',
    CAR_NAME_DUPLICATE_ERROR: '차량 이름이 중복되었습니다!',
    ATTEMPT_COUNT_ERROR: '올바른 숫자를 입력해주세요!',
    ATTEMPT_COUNT_MINIMUM_ERROR: '1이상의 숫자를 입력해주세요!',
  };

  static validateCarNames(cars) {
    if (!this.isCarNameValid(cars)) {
      throw Error(`[ERROR] ${this.ERROR_MESSAGE.CAR_NAME_LENGTH_ERROR}`);
    }
    if (this.isDuplicateCarName(cars)) {
      throw Error(`[ERROR] ${this.ERROR_MESSAGE.CAR_NAME_DUPLICATE_ERROR}`);
    }
  }

  static validateAttemptCount(attemptCount) {
    if (Number.isNaN(attemptCount)) {
      throw Error(`[ERROR] ${this.ERROR_MESSAGE.ATTEMPT_COUNT_ERROR}`);
    }
    if (attemptCount < 1) {
      throw Error(`[ERROR] ${this.ERROR_MESSAGE.ATTEMPT_COUNT_MINIMUM_ERROR}`);
    }
  }

  static isCarNameValid(cars) {
    return cars.every(car => car.name.length > 0 && car.name.length <= 5);
  }

  static isDuplicateCarName(cars) {
    const carNames = cars.map(car => car.name);
    return new Set(carNames).size !== carNames.length;
  }
}

export default Validation;
