import TryNumberValidation from '../validation/TryNumberValidation.js';
import ERROR from '../constants/Error.js';

class RacingTryNumber {
  static validate(tryNumber) {
    if (TryNumberValidation.checkIsEmpty(tryNumber)) throw new Error(ERROR.prefix + ERROR.empty);
  }
}

export default RacingTryNumber;
