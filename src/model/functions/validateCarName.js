import { ERROR } from '../../constants/constants.js';

const validateCarNameIsString = (car) => {
  if (!Number.isNaN(Number(car))) {
    throw new Error(ERROR.CAR_NAME_STRING);
  }
};

const validateCarNameIsNotEmpty = (car) => {
  if (car.length === 0) {
    throw new Error(ERROR.CAR_NAME_EMPTY);
  }
};

const validateCarNameLength = (car) => {
  if (car.length > 5) {
    throw new Error(ERROR.CAR_NAME_INPUT);
  }
};

const validateCarNameIsUnique = (car, carNamesSet) => {
  if (carNamesSet.has(car)) {
    throw new Error(ERROR.CAR_NAME_DUPLICATE);
  }
};

export const validateCarName = (car, carNamesSet) => {
  validateCarNameIsString(car);
  validateCarNameIsNotEmpty(car);
  validateCarNameLength(car);
  validateCarNameIsUnique(car, carNamesSet);
};
