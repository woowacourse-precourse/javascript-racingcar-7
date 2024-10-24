import { checkArrayLength, checkIsEmpty, checkStringLength, handleError } from './utils/index.js';

class Validator {
  static IsEmpty(value) {
    if (checkIsEmpty(value)) {
      handleError('[ERROR] : 자동차 이름에는 공백을 넣을 수 없어요.');
    }
  }

  static stringLength(value) {
    if (checkStringLength(value)) {
      handleError('[ERROR] : 자동차 이름은 5글자 이하만 가능해요.');
    }
  }

  static arrayLength(value) {
    if (checkArrayLength(value)) {
      handleError('[ERROR] : 자동차가 2대 이상 참여해야 경주를 시작할 수 있어요.');
    }
  }
}

export default Validator;
