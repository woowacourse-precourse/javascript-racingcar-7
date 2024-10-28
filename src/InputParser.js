import { ERROR_MESSAGES } from './constants.js';

class InputParser {
  constructor(carNamesStr, tryCntStr) {
    this.carNamesArr = this.parseCarNames(carNamesStr);
    this.tryCnt = +tryCntStr;
  }

  parse() {
    this.validateCarNames();
    this.validateTryCnt();

    return {
      carNamesArr: this.carNamesArr,
      tryCnt: this.tryCnt,
    };
  }

  parseCarNames(carNamesStr) {
    return carNamesStr.split(',');
  }

  validateTryCnt() {
    if (this.tryCnt === 0 || !Number.isInteger(this.tryCnt)) {
      this.printError(ERROR_MESSAGES.TRY_CNT_MUST_BE_POSITIVE_INTEGER);
    }
  }

  validateCarNames() {
    this.carNamesArr.forEach((carName) => {
      this.validateCarName(carName);
    });
  }

  validateCarName(carName) {
    if (carName.length > 5) {
      this.printError(ERROR_MESSAGES.CAR_NAME_MUST_BE_UNDER_FIVE_CHARACTERS);
    }
  }

  printError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}

export default InputParser;
