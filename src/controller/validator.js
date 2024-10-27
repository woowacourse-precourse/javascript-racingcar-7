import { ERROR_MESSAGE } from "../constants/messages.js";

class Validator {
  static checkName(carName) {
    Validator.#checkNameLength(carName);
    Validator.#checkSpecialCharacters(carName);
    Validator.#checkNameLanguage(carName);
  }

  static checkCarList(carList) {
    Validator.#checkDuplicateName(carList);
    Validator.#checkCarListSize(carList);
  }

  static #checkNameLength(carName) {
    if (carName.length < 1) {
      throw new Error(ERROR_MESSAGE.NAME_TOO_SHORT);
    }

    if (carName.length > 5) {
      throw new Error(ERROR_MESSAGE.NAME_TOO_LONG);
    }
  }

  static #checkSpecialCharacters(carName) {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>~`]/;
    if (specialCharRegex.test(carName)) {
      throw new Error(ERROR_MESSAGE.SPECIAL_CHARACTERS_NOT_ALLOWED);
    }
  }

  static #checkNameLanguage(carName) {
    const regex = /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ0-9\s]+$/;
    if (!regex.test(carName)) {
      throw new Error(ERROR_MESSAGE.ONLY_ENGLISH_AND_KOREAN_ALLOWED);
    }
  }

  static #checkDuplicateName(carList) {
    const lowerCaseCarNames = carList.map((name) => name.toLowerCase());
    const carSet = new Set(lowerCaseCarNames);
    if (lowerCaseCarNames.length !== carSet.size) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME_NOT_ALLOWED);
    }
  }

  static #checkCarListSize(carList) {
    if (carList.length < 2) {
      throw new Error(ERROR_MESSAGE.CAR_LIST_TOO_SMALL);
    }
  }

  static checkMoveAttempts(attempts) {
    Validator.#checkEmptyInput(attempts);
  }

  static #checkEmptyInput(attempts) {
    if (attempts.length < 1) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT_NOT_ALLOWED);
    }
  }
}

export default Validator;
