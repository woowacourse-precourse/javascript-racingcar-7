import ERROR_MESSAGES from '../../constraints/errorMessages.js';

export function validateTryCountIsPositive(tryCount) {
  if (tryCount < 1) {
    throw new Error(ERROR_MESSAGES.TRY_COUNT_IS_NOT_POSITIVE);
  }  
}