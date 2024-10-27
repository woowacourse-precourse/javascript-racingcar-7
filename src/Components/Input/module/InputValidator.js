import isEmptyInput from "../../../Validator/isEmptyInput.js";
import isWhitespacePresent from "../../../Validator/isWhitespacePresent.js";

class InputVaildator {
  static vaildateInputCarList(carList) {
    isEmptyInput(carList);
    isWhitespacePresent(carList);
  }
}

export default InputVaildator;
