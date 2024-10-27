import { ERROR_MESSAGE } from "../constants/messages.js";

class Validator {
  static checkName(carName) {
    Validator.#checkNameLength(carName);
    Validator.#checkNameLanguage(carName);
    Validator.#checkSpecialCharacters(carName);
  }

  static checkDuplicateName(carList) {
    const lowerCaseCarNames = carList.map((name) => name.toLowerCase());
    const carSet = new Set(lowerCaseCarNames);
    if (lowerCaseCarNames.length !== carSet.size) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME_NOT_ALLOWED);
    }
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
}

export default Validator;
