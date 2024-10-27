import isEmptyInput from "./isEmptyInput.js";
import isValidNamesList from "./isValidNamesList.js";
import isValidNumber from "./isValidNumber.js";
import isWhitespacePresent from "./isWhitespacePresent.js";

class InputValidator {
  static validateInputCarList(carList) {
    isEmptyInput(carList);
    isWhitespacePresent(carList);
  }
  static validateCarArray(carListArr) {
    isValidNamesList(carListArr);
  }
  static validateTryNumber(tryNumber) {
    isEmptyInput(tryNumber);
    isValidNumber(tryNumber);
  }
}

export default InputValidator;
