import { ERROR_MESSAGE } from '../constants/Message.js';

class CarNameValidator {
  static validate(carNameList) {
    carNameList.forEach(carName => {
      if (carName === '') {
        throw new Error(ERROR_MESSAGE.EMPTY_CAR_NAME);
      }

      if (carName.includes(' ')) {
        throw new Error(ERROR_MESSAGE.SPACE_IN_CAR_NAME);
      }

      if (carName.length > 5) {
        throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
      }
    });

    if (carNameList.length < 2) {
      throw new Error(ERROR_MESSAGE.LESS_THAN_TWO_CARS);
    }

    const checkDuplicateCarName = new Set(carNameList);
    if (checkDuplicateCarName.size !== carNameList.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_CAR_NAME);
    }
  }
}

export default CarNameValidator;
