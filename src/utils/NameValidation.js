import {
  EMPTY_CAR_NAME_ERROR,
  MORE_THAN_FIVE_LETTERS,
  SAME_CAR_NAME_ERROR,
  ONE_CAR_NAME_ERROR,
} from '../constants/Error.js';

class NameValidation {
  static isValid(carNames) {
    if (carNames === '') {
      throw new Error(EMPTY_CAR_NAME_ERROR);
    }

    const nameList = carNames.split(',');
    nameList.forEach(name => {
      if (name.length > 5) {
        throw new Error(MORE_THAN_FIVE_LETTERS);
      }
    });

    if (nameList.length > 1) {
      const nameSet = new Set(nameList);

      if (nameList.length !== nameSet.size) {
        throw new Error(SAME_CAR_NAME_ERROR);
      }

      return true;
    }
    if (nameList.length === 1) {
      throw new Error(ONE_CAR_NAME_ERROR);
    }
    return true;
  }
}

export default NameValidation;
