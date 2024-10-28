import { ERROR_MESSAGE } from "../constants/constants.js";

class InputValidation{

  static carNameValidate(carNameArray) {
    if (carNameArray.some(carName => carName.length > 5)) {
      throw new Error(ERROR_MESSAGE.invalidNameRangeError);
    }

    if (carNameArray.some(carName => carName.length === 0)) {
      throw new Error(ERROR_MESSAGE.invalidNameError);
    }
  }

  static attemptsValidate(attemptsData) {
    const numericAttemptsData = Number(attemptsData);

    if (isNaN(numericAttemptsData) || 
        !Number.isInteger(numericAttemptsData) || 
        numericAttemptsData <= 0) {
        throw new Error(ERROR_MESSAGE.invalidAttemptsError);
    }
  }
}

export default InputValidation;