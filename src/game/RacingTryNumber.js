import TryNumberValidation from '../validation/TryNumberValidation.js';
import ERROR from '../constants/Error.js';

class RacingTryNumber {
  static validate(tryNumber) {
    if (TryNumberValidation.checkIsEmpty(tryNumber)) throw new Error(ERROR.prefix + ERROR.empty);
    if (TryNumberValidation.checkIsNaN(tryNumber)) throw new Error(ERROR.prefix + ERROR.isNaN);
    if (TryNumberValidation.checkInRange(tryNumber)) throw new Error(ERROR.prefix + ERROR.tryCount);
  }
}

export default RacingTryNumber;
