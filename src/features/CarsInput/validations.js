import { INPUT_ERROR } from '../../constants/errorMessages.js';
import throwError from '../../utils/throwError.js';

const validateEmptyInput = (cars) => {
  if (!cars.every((car) => car.length > 0)) {
    throwError(INPUT_ERROR.EMPTY_STRING);
  }
};

const validateCarLength = (cars) => {
  if (!cars.every((car) => car.length <= 5)) {
    throwError(INPUT_ERROR.CAR_NAME_TOO_LONG);
  }
};

const validateCars = (cars) => {
  validateEmptyInput(cars);
  validateCarLength(cars);
};

export default validateCars;
