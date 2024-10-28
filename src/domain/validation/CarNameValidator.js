import { CAR_NAME_RULE } from '../../constants/Rule.js';
import ERROR from '../../constants/Error.js';

export default class CarNameValidator {
  static validateCarNameLength (carName) {
    if (carName.length > CAR_NAME_RULE.MAX_LENGTH
      || carName.length < CAR_NAME_RULE.MIN_LENGTH
    ) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }
  }
}
