import { trimSpaces } from './utils/trimSpaces.js';

class Validator {
  #checkLength(carName) {
    if (carName.length > 5) {
      throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
    }
  }
}

export default Validator;
