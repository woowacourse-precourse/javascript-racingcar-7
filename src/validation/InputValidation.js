import { ERROR_MESSAGE } from "../constants/constants.js";

class InputValidation{

  static carNameValidate(carNameArray) {
    if (carNameArray.some(carName => carName.length > 5)) {
      throw new Error(ERROR_MESSAGE.invalidNameError);
    }

    if (carNameArray.some(carName => carName.length === 0)) {
      throw new Error(ERROR_MESSAGE.invalidNameError);
    }
  }

  static attemptsValidate(attemptsData) {
  
  }
}

export default InputValidation;