export default class Validator {
  static validateCarNames(carNamesArray) {
    this.validateCarNameWhitespace(carNamesArray);
    this.validateCarNameLength(carNamesArray);
    this.validateDuplicateCarName(carNamesArray);
  }

  static validateCarNameWhitespace(carNamesArray) {
    carNamesArray.forEach((carName) => {
      if (carName == '') {
        throw new Error('[ERROR] 자동차 이름에 공백을 입력하였습니다.');
      }
    });
  }

  static validateCarNameLength(carNamesArray) {
    carNamesArray.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.');
      }
    });
  }

  static validateDuplicateCarName(carNamesArray) {
    const carNamesSet = new Set();

    carNamesArray.forEach((carName) => {
      if (carNamesSet.has(carName)) {
        throw new Error(`[ERROR] 중복된 자동차 이름: ${carName}`);
      }

      carNamesSet.add(carName);
    });
  }

  static validateAttemptCount(attemptCount) {
    const isValid = /^\d+$/.test(attemptCount);
    if (!isValid || Number(attemptCount) === 0) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 정수를 입력해야 합니다.');
    }
  }
}
