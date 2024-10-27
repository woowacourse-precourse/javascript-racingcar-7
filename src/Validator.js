import {
  checkArrayLength,
  checkIsEmptyOrNull,
  checkIsInteger,
  checkIsRoundOutOfRange,
  checkStringLength,
  handleError,
  hasDuplicates
} from './utils/index.js';

class Validator {
  static isEmptyOrNull(value) {
    if (checkIsEmptyOrNull(value)) {
      handleError('[ERROR] : 자동차 이름 입력된 값은 비어 있거나 공백을 포함할 수 없어요.');
    }
  }

  static length(value) {
    if (checkStringLength(value)) {
      handleError('[ERROR] : 자동차 이름은 5글자 이하만 가능해요.');
    }
  }

  static arraySize(value) {
    if (checkArrayLength(value)) {
      handleError('[ERROR] : 자동차가 2대 이상 참여해야 경주를 시작할 수 있어요.');
    }
  }

  static duplicates(value) {
    if (hasDuplicates(value)) {
      handleError('[ERROR] : 자동차 이름은 중복으로 사용할 수 없어요.');
    }
  }

  static isRoundOutOfRange(value) {
    if (checkIsRoundOutOfRange(value)) {
      handleError('[ERROR] : 경주를 진행할 횟수를 1회 이상 입력해주세요.');
    }
  }

  static isInteger(value) {
    if (checkIsInteger(value)) {
      handleError('[ERROR] : 경주를 진행할 횟수에 소수나 문자열을 입력할 수 없어요. 정수의 값을 입력해주세요.');
    }
  }

  static rounds(value) {
    this.isRoundOutOfRange(value);
    this.isInteger(value);
  }

  static carName(carNames) {
    this.isEmptyOrNull(carNames);
    this.length(carNames);
    this.arraySize(carNames);
    this.duplicates(carNames);
  }
}

export default Validator;
