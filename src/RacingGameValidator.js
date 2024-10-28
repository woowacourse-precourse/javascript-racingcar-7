class RacingGameValidator {
  static validateCarNameLengthUnderSix(carNames) {
    carNames.forEach((car) => {
      if (car.length > 5) throw Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    });
  }

  static validateCarNumberOverOne(carNames) {
    if (carNames.length < 2) throw Error('[ERROR] 자동차 갯수는 2대 이상 가능합니다.');
  }

  static validateTryCountIsNumber(tryCount) {
    if (isNaN(tryCount)) throw Error('[ERROR] 시도할 횟수는 숫자만 입력할 수 있습니다.');
  }

  static validateTryCountOverZero(tryCount) {
    if (tryCount === 0) throw Error('[ERROR] 0회 이상의 시도 횟수를 입력해 주세요.');
  }
}

export default RacingGameValidator;
