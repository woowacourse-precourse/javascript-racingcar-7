class InputParser {
  constructor(carNamesStr, attemptCntStr) {
    this.carNamesStr = carNamesStr;
    this.attemptCnt = +attemptCntStr;
    this.carNamesArr = this.parseCarNames();
  }

  parse() {
    this.validateCarNames();
    this.validateAttempCnt();

    return {
      carNamesArr: this.carNamesArr,
      attemptCnt: this.attemptCnt,
    };
  }

  parseCarNames() {
    return this.carNamesStr.split(',');
  }

  validateAttempCnt() {
    if (this.attemptCnt === 0 || !Number.isInteger(this.attemptCnt)) {
      this.printError('시도 횟수는 1 이상의 정수만 가능합니다.');
    }
  }

  validateCarNames() {
    this.carNamesArr.forEach((carName) => {
      this.validateCarName(carName);
    });
  }

  validateCarName(carName) {
    if (carName.length > 5) {
      this.printError('자동차 이름은 5자 이하만 가능합니다.');
    }
  }

  printError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}

export default InputParser;
