import ERROR_MESSAGES from '../../constraints/errorMessages.js';

export function validateCarNames(cars) {
  cars.reduce((_, carName) => {
    if (carName === '') {
      throw new Error(ERROR_MESSAGES.EMPTY_STRING);
    }
    if (carName.length > 5) {
      throw new Error(ERROR_MESSAGES.LONG_NAME);
    }
    return null;
  }, null);
}
