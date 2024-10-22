import { INPUT_ERROR } from '../../constants/errorMessages.js';
import throwError from '../../utils/throwError.js';

export const validateEmptyInput = input => {
  if (input === '') {
    throwError(INPUT_ERROR.EMPTY_STRING);
  }
};

export const validateCarLength = cars => {
  if (!cars.every(car => car.length <= 5)) {
    throwError(INPUT_ERROR.CAR_NAME_TOO_LONG);
  }
};
