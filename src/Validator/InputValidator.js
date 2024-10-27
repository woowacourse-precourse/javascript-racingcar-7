import isEmptyInput from "./isEmptyInput.js";
import isVaildNamesList from "./isValidNamesList.js";
import isWhitespacePresent from "./isWhitespacePresent.js";

class InputVaildator {
  static vaildateInputCarList(carList) {
    isEmptyInput(carList);
    isWhitespacePresent(carList);
  }
  static vaildateCarArray(carListArr) {
    isVaildNamesList(carListArr);
  }
}

export default InputVaildator;
