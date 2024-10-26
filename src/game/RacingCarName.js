import CarNameValidation from '../validation/CarNameValidation.js';
import ERROR from '../constants/Error.js';

class RacingCarName {
  static validate(name) {
    if (CarNameValidation.checkIsEmpty(name)) throw new Error(ERROR.prefix + ERROR.empty);
  }
}

export default RacingCarName;
