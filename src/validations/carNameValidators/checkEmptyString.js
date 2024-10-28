import ERROR_MESSAGES from '../../constraints/errorMessages.js';

export function checkEmptyString(cars) {
  if (cars.includes('')) {
    throw new Error(ERROR_MESSAGES.CAR_NAME_IS_EMPTY);
  }
}