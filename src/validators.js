import { throwError } from './utils.js';
import { ERROR_MESSAGE } from './constants.js'; 

const validateCarName = (input) => {
  if (!input) {
    throwError(ERROR_MESSAGE.EMPTY_INPUT);
  }

  input
    .split(',')
    .map(name => name.trim())
    .filter((name, i, arr) => {
      if (name.length > 5) throwError(ERROR_MESSAGE.INVALID_INPUT);
      if (arr.indexOf(name) !== i) throwError(ERROR_MESSAGE.DUPLICATE_INPUT);
      return true;
    });  
};

const validateAttemptCount = (input) => {
  if (!input) {
    throwError(ERROR_MESSAGE.EMPTY_INPUT);
  }

  if (!/^[1-9]\d*$/.test(input)) {
    throwError(ERROR_MESSAGE.INVALID_ATTEMPTS_COUNT);
  }

  return true;
};

export {
  validateCarName,
  validateAttemptCount
};
