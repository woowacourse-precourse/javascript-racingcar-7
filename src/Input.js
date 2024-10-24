import {
  ERROR_MESSAGE_CAR_NAME_OVER_FIVE,
  INPUT_MESSAGE_CAR_NAMES,
  INPUT_MESSAGE_TRY_COUNT,
} from "./constants";
import {
  readLineAsync,
  splitIntoArray,
  validatePositiveInteger,
  validateStringArrayLength,
} from "./utils";

class Input {
  static MAX_CAR_NAME_LENGTH = 5;
  static async getUserInput() {
    const carNames = await readLineAsync(INPUT_MESSAGE_CAR_NAMES);
    const tryCount = await readLineAsync(INPUT_MESSAGE_TRY_COUNT);

    return [carNames, tryCount];
  }

  static processCarNames(userInputCarNames) {
    const carNameArray = splitIntoArray(userInputCarNames, ",");
    this.validateCarNameLength(carNameArray);
    return carNameArray;
  }

  static processTryCount(userInputTryCount) {
    const tryCount = +userInputTryCount;
    validatePositiveInteger(tryCount);
    return tryCount;
  }

  static validateCarNameLength(carNameArray) {
    try {
      validateStringArrayLength(carNameArray, this.MAX_CAR_NAME_LENGTH);
    } catch (e) {
      throw new Error(ERROR_MESSAGE_CAR_NAME_OVER_FIVE);
    }
  }
}

export default Input;
