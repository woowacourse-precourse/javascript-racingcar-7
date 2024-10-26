import { ERROR } from '../../constants/message.js';
import { THRESHOLD } from '../../constants/threshold.js';
import throwError from '../error.js';

const validateCarEmpty = (cars) => {
  if (!cars.every((car) => car.length > 0)) {
    throwError(ERROR.EMPTY);
  }
};

const validateCarLength = (cars, max) => {
  if (!cars.every((car) => car.length <= max)) {
    throwError(ERROR.OVER_MAX_LENGTH);
  }
};

export const validateCars = (cars) => {
  validateCarEmpty(cars);
  validateCarLength(cars, THRESHOLD.MAX_NAME_LENGTH);
};
