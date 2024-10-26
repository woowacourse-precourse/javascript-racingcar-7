import ERROR_MESSAGES from '../../constraints/errorMessages.js';

export function tryCountEmptyCheck(tryCount) {
  if (!tryCount) {
    throw new Error(ERROR_MESSAGES.TRY_COUNT_IS_EMPTY);
  }
}