import { MAX_MOVE_TIMES, MESSAGES } from '../constant/Constants';

class Validator {
  static isValidCarName(cars) {
    const carNameArr = cars.split(',');
    const carSet = [...new Set(carNameArr)];

    if (carNameArr.some((car) => car.length > 5)) {
      throw new Error(MESSAGES.ERROR.CAR.INVALID_NAME_LENGTH);
    } else if (carNameArr.length !== carSet.length) {
      throw new Error(MESSAGES.ERROR.CAR.INVALID_DUPLICATED_NAME);
    } else if (carNameArr.some((car) => car === '')) {
      throw new Error(MESSAGES.ERROR.CAR.INVALID_EMPTY_NAME);
    }
  }

  static isValidMoveTimes(moveTimes) {
    if (moveTimes === '') {
      throw new Error(MESSAGES.ERROR.TIME.INVALID_EMPTY_TIME);
    } else if (isNaN(moveTimes)) {
      throw new Error(MESSAGES.ERROR.TIME.INVALID_TIME_TYPE);
    } else if (moveTimes < 0) {
      throw new Error(MESSAGES.ERROR.TIME.INVALID_NEGATIVE_TIME);
    } else if (moveTimes > MAX_MOVE_TIMES) {
      throw new Error(MESSAGES.ERROR.TIME.INVALID_TIME_SIZE);
    }
  }
}

export default Validator;
