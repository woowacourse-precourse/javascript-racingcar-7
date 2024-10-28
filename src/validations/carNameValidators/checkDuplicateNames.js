import ERROR_MESSAGES from '../../constraints/errorMessages.js';

export function checkDuplicateNames(cars) {
  const hasDuplicates = new Set(cars).size !== cars.length;
  if (hasDuplicates) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NAME);
  }
}
