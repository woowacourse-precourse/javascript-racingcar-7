import { ERROR } from "../constants/constants.js";

class Validation {
  static validateCarNames(carNames) {
    carNames.forEach((name) => {
      this.checkForErrors(name);
    });
    this.checkForDuplicates(carNames);
  }

  static checkForErrors(name) {
    if (!name) {
      this.throwError(ERROR.emptyName);
    }
    if (this.hasSpace(name)) {
      this.throwError(ERROR.space);
    }
    if (this.isMoreThanFiveLetters(name)) {
      this.throwError(ERROR.moreThanFiveLetters);
    }
    if (this.hasSpecialCharacters(name)) {
      this.throwError(ERROR.specialChar);
    }
  }

  static checkForDuplicates(carNames) {
    if (this.isDuplicate(carNames)) {
      this.throwError(ERROR.duplicate);
    }
  }

  static throwError(message) {
    throw new Error(message);
  }

  static hasSpecialCharacters(name) {
    return /[^\w\s]/g.test(name);
  }

  static isMoreThanFiveLetters(name) {
    return name.length > 5;
  }

  static hasSpace(name) {
    return /\s/g.test(name);
  }

  static isDuplicate(names) {
    return new Set(names).size !== names.length;
  }

  static validateRepeatTime(repeatTime) {
    if (this.isNotNumeric(repeatTime) || repeatTime <= 0) {
      this.throwError(ERROR.tryCount);
    }
  }

  static isNotNumeric(value) {
    return isNaN(value);
  }
}

export default Validation;
