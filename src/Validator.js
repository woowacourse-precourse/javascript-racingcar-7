import { trimSpaces } from './utils/trimSpaces.js';

class Validator {
  // 이름 검증 메서드
  validateCarName(carName) {
    const trimmedInput = trimSpaces(carName);
    this.#checkLength(trimmedInput);
    this.#checkName(trimmedInput);
    return trimmedInput;
  }

  #checkLength(carName) {
    if (carName.length > 5) {
      throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
    }
  }

  #checkName(carName) {
    const validPattern = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+$/;
    const isValid = validPattern.test(carName);

    if (carName === '') return;

    if (!isValid) {
      throw new Error('[ERROR] 이름은 한글 또는 영어만 가능합니다.');
    }
  }

  #checkNumber(attempt) {
    const isNumber = typeof attempt === 'number' && !isNaN(attempt);

    if (!isNumber) {
      throw new Error('[ERROR] 횟수는 숫자만 입력 가능합니다.');
    }
  }

  #checkInteger(attempt) {
    const isInteger = Number.isInteger(attempt);

    if (!isInteger) {
      throw new Error('[ERROR] 횟수는 정수만 입력 가능합니다.');
    }
  }
}

export default Validator;
