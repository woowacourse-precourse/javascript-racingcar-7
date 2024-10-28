import { ERROR_MESSAGE } from "./constants.js";

class Validator {
  static validateTryCountInput(tryCount) {
    if (tryCount === "") {
      throw new Error(ERROR_MESSAGE.EMPTY_TRYCOUNT);
    }
    if (tryCount <= 0) {
      throw new Error(ERROR_MESSAGE.INVALID_TRYCOUNT);
    }
    if (isNaN(tryCount)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER_TRYCOUNT);
    }
  }

  static validateNameInput(nameInput) {
    if (nameInput === "" || nameInput.split(",").some((name) => name === "")) {
      throw new Error(ERROR_MESSAGE.EMPTY_NAME);
    }
    if (nameInput.split(",").length !== new Set(nameInput.split(",")).size) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
    }
    if (nameInput.split(",").some((name) => name.length > 5)) {
      throw new Error(ERROR_MESSAGE.OVER_LENGTH_NAME);
    }
    if (nameInput.includes(" ")) {
      throw new Error(ERROR_MESSAGE.SPACE_NAME);
    }

    const nameFormat = /^[A-Za-z]+$/; // 영문자만 허용하는 정규 표현식
    if (nameInput.split(",").some((name) => !nameFormat.test(name))) {
      throw new Error(ERROR_MESSAGE.INVALID_CHAR_NAME); // 숫자나 특수 문자가 포함된 경우 에러 발생
    }
  }
}

export default Validator;
