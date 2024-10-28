export default class InputValidator {
  constructor(carNames, raceCount) {
    this.carNames = carNames;
    this.raceCount = raceCount;
    this.carNameList = [];
    this.validateInput();
  }

  validateInput() {
    this.validateEmpty();
    this.validateSpace();
    this.carNameList = this.carNames.split(',');
    this.validateLength();
  }

  validateEmpty() {
    if (this.carNames === '' || this.raceCount < 1) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
  }

  validateSpace() {
    if (this.carNames.split(' ')[0] !== this.carNames) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
  }

  validateLength() {
    this.carNameList.forEach((item) => {
      if (item.length > 5 || item.length === 0) {
        throw new Error('[ERROR] 잘못된 입력입니다.');
      }
    });
  }
}