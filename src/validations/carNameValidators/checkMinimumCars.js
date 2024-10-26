import ERROR_MESSAGES from '../../constraints/errorMessages.js';

export function checkMinimumCars(cars) {
  if (cars.length < 2) {
    throw new Error(ERROR_MESSAGES.MINIMUM_CARS);
  }
}
