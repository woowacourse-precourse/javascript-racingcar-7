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
    if (this.isNegativeOrZero(this.tryCnt) || this.isNotInteger(this.tryCnt)) {
      this.printError(ERROR_MESSAGES.TRY_CNT_MUST_BE_POSITIVE_INTEGER);
    }
  }

  isNegativeOrZero(value) {
    return value <= 0;
  }

  isNotInteger(value) {
    return !Number.isInteger(value);
  }

  validateCarNames() {
    this.carNamesArr.forEach((carName) => {
      this.validateCarName(carName);
    });
  }

  validateCarName(carName) {
    if (this.isLengthExceeding(carName, 5)) {
      this.printError(ERROR_MESSAGES.CAR_NAME_MUST_BE_UNDER_FIVE_CHARACTERS);
    }
  }

  isLengthExceeding(value, maxLength) {
    return value.length > maxLength;
  }

  printError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}

export default InputParser;
