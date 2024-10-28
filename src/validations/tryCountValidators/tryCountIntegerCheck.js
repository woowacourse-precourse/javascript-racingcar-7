import ERROR_MESSAGES from '../../constraints/errorMessages.js';

export function tryCountIntegerCheck(tryCount) {
  const parseToFloat = parseFloat(tryCount);
  if (!Number.isInteger(parseToFloat)) {
    throw new Error(ERROR_MESSAGES.NOT_INTEGER);
  }

  if (tryCount.includes('.')) {
    throw new Error(ERROR_MESSAGES.NOT_INTEGER);
  }
}
