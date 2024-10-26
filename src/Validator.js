import { checkArrayLength, checkIsEmptyOrNull, checkMinRounds, checkStringLength, handleError } from './utils/index.js';

class Validator {
  static IsEmpty(value) {
    if (checkIsEmptyOrNull(value)) {
      handleError('[ERROR] : 자동차 이름 입력된 값은 비어 있거나 공백을 포함할 수 없어요.');
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

  static minRound(value) {
    if (checkMinRounds(value)) {
      handleError('[ERROR] : 경주를 진행할 횟수를 1회 이상 입력해주세요.');
    }
  }
}

export default Validator;
