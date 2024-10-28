import { ERROR_MESSAGE } from "../constants/messages.js";

class Validator {
  static #MIN_NAME_LENGTH = 1;
  static #MAX_NAME_LENGTH = 20;
  static #SPECIAL_CHAR_REGEX = /[!@#$%^&*(),.?":{}|<>~`]/;
  static #NAME_LANGUAGE_REGEX = /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ0-9\s]+$/;
  static #MIN_CAR_LIST_SIZE = 2;
  static #MAX_CAR_LIST_SIZE = 100;
  static #EMPTY_STRING = "";
  static #POSITIVE_NUMBER_REGEX = /^\d+$/;
  static #MIN_NUMBER_SIZE = 1;
  static #MAX_NUMBER_SIZE = 100;

  static checkName(carName) {
    Validator.#checkNameLength(carName);
    Validator.#checkSpecialCharacters(carName);
    Validator.#checkNameLanguage(carName);
    Validator.#checkWhiteSpaceName(carName);
  }

  static checkCarList(carList) {
    Validator.#checkDuplicateName(carList);
    Validator.#checkCarListSize(carList);
  }

  static #checkNameLength(carName) {
    if (carName.length < Validator.#MIN_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGE.NAME_TOO_SHORT);
    }

    if (carName.length > Validator.#MAX_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGE.NAME_TOO_LONG);
    }
  }

  static #checkSpecialCharacters(carName) {
    if (Validator.#SPECIAL_CHAR_REGEX.test(carName)) {
      throw new Error(ERROR_MESSAGE.SPECIAL_CHARACTERS_NOT_ALLOWED);
    }
  }

  static #checkNameLanguage(carName) {
    if (!Validator.#NAME_LANGUAGE_REGEX.test(carName)) {
      throw new Error(ERROR_MESSAGE.ONLY_ENGLISH_AND_KOREAN_ALLOWED);
    }
  }

  static #checkWhiteSpaceName(carName) {
    if (!carName.trim()) {
      throw new Error(ERROR_MESSAGE.WHITESPACE_ONLY_NAME_NOT_ALLOWED);
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
    if (carList.length < Validator.#MIN_CAR_LIST_SIZE) {
      throw new Error(ERROR_MESSAGE.CAR_LIST_TOO_SMALL);
    }

    if (carList.length > Validator.#MAX_CAR_LIST_SIZE) {
      throw new Error(ERROR_MESSAGE.CAR_LIST_TOO_BIG);
    }
  }

  static checkMoveAttempts(attempts) {
    Validator.#checkEmptyInput(attempts);
    Validator.#checkPositiveNumber(attempts);
    Validator.#checkNumberSize(attempts);
  }

  static #checkEmptyInput(attempts) {
    if (attempts === Validator.#EMPTY_STRING) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT_NOT_ALLOWED);
    }
  }

  static #checkPositiveNumber(attempts) {
    if (
      !Validator.#POSITIVE_NUMBER_REGEX.test(attempts) ||
      attempts < Validator.#MIN_NUMBER_SIZE
    ) {
      throw new Error(ERROR_MESSAGE.ONLY_POSITIVE_NUMBER_ALLOWED);
    }
  }

  static #checkNumberSize(attempts) {
    if (attempts > Validator.#MAX_NUMBER_SIZE) {
      throw new Error(ERROR_MESSAGE.MOVE_ATTEMPTS_TOO_BIG);
    }
  }
}

export default Validator;
