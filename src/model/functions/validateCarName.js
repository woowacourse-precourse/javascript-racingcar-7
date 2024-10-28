import { ERROR } from '../../constants/constants.js';

export const validateCarName = (car, carNamesSet) => {
  if (!isNaN(Number(car))) {
    throw new Error(ERROR.CAR_NAME_STRING);
  }

  if (car.length === 0) {
    throw new Error(ERROR.CAR_NAME_EMPTY);
  }

  if (car.length > 5) {
    throw new Error(ERROR.CAR_NAME_INPUT);
  }

  if (carNamesSet.has(car)) {
    throw new Error(ERROR.CAR_NAME_DUPLICATE);
  }
};
