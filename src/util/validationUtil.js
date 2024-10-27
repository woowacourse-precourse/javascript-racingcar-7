import { ERROR } from '../constant.js';

export function checkEmptyString(input) {
  if (input.trim() === '') {
    throw new Error(ERROR.EMPTY_STRING);
  }
}

export function checkMinCarNumber(cars) {
  if (cars.length < 2) {
    throw new Error(ERROR.MIN_CAR_NUMBER);
  }
}

export function checkMaxCarNumber(cars) {
  if (cars.length > 1000) {
    throw new Error(ERROR.MAX_CAR_NUMBER);
  }
}

export function checkCarNameLength(cars) {
  cars.forEach((car) => {
    if (car.length > 5) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }
  });
}

export function checkConflictingCarName(cars) {
  if (new Set(cars).size !== cars.length) {
    throw new Error(ERROR.CONFLICTING_CAR_NAME);
  }
}

export function checkMinTryNumber(tryNumber) {
  if (tryNumber < 1) {
    throw new Error(ERROR.MIN_TRY_NUMBER);
  }
}

export function checkMaxTryNumber(tryNumber) {
  if (tryNumber > 10000) {
    throw new Error(ERROR.MAX_TRY_NUMBER);
  }
}

export function checkIntegerTryNumber(tryNumber) {
  if (!Number.isInteger(tryNumber)) {
    throw new Error(ERROR.INTEGER_TRY_NUMBER);
  }
}
