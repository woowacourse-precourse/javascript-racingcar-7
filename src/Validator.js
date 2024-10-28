import { trimSpaces } from './utils/trimSpaces.js';

class Validator {
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
}

export default Validator;
