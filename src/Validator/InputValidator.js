import isEmptyInput from "./isEmptyInput.js";
import isValidNamesList from "./isValidNamesList.js";
import isValidNumber from "./isValidNumber.js";
import isWhitespacePresent from "./isWhitespacePresent.js";

/**
 * @classdesc 입력값을 검증하는 클래스
 * - `validateInputCarList(carList)`: 자동차 목록 입력값을 검증
 * - `validateCarArray(carListArr)`: 자동차 이름 배열의 유효성을 검사
 * - `validateTryNumber(tryNumber)`: 숫자 입력값의 유효성을 검증
 */
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
    isWhitespacePresent(tryNumber);
    isValidNumber(tryNumber);
  }
}

export default InputValidator;
