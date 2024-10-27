import MESSAGE from '../constants/MESSAGE.js';
import CONSTANT from '../constants/CONSTANT.js';

class NameValidator {
  runAllFunction(carNameList) {
    carNameList.map((car) => {
      this.validateLength(car);
      this.validateSeparator(car);
      this.validateBlankName(car);
      return carNameList;
    });
  }

  validateLength(carName) {
    if (carName.length > CONSTANT.MAX_CAR_NAME_LENGTH) {
      throw new Error(MESSAGE.CAR_NAME_ERROR);
    }
  }

  validateSeparator(carName) {
    if (CONSTANT.CAR_NAME_CONDITION.test(carName)) {
      throw new Error(MESSAGE.CAR_NAME_ERROR);
    }
  }

  validateBlankName(carName) {
    if (carName === CONSTANT.BLANK) {
      throw new Error(MESSAGE.CAR_NAME_ERROR);
    }
  }
}

export default NameValidator;
