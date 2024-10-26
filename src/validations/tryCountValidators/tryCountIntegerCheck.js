import ERROR_MESSAGES from '../../constraints/errorMessages.js';

export function tryCountIntegerCheck(tryCount) {
  const PARSED_TO_FLOAT = parseFloat(tryCount);
  if (!Number.isInteger(PARSED_TO_FLOAT)) {
    throw new Error(ERROR_MESSAGES.NOT_INTEGER);
  }
}
