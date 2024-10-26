import ERROR_MESSAGES from '../../constraints/errorMessages.js';

export function tryCountNumberCheck(tryCount) {
  if (isNaN(tryCount)){
    throw new Error(ERROR_MESSAGES.NOT_NUMBER);
  }
}
