import { throwError, splitByDelimiter } from './utils.js';
import { ERROR_MESSAGE, GAME_RULES } from './constants.js'; 

export const isEmpty = (input) => !input;

export const isMaxLength = (input, maxLength) => input.length <= maxLength;

export const hasDuplicates = (arr) => new Set(arr).size !== arr.length;

export const isPositiveInteger = (input) => /^[1-9]\d*$/.test(input);


const validateCarName = (input) => {
  if (isEmpty(input)) {
    throwError(ERROR_MESSAGE.EMPTY_INPUT);
  }

  const carNames = splitByDelimiter(input);

  if (!carNames.every(name => isMaxLength(name, GAME_RULES.MAX_CAR_NAME_LENGTH))) {
    throwError(ERROR_MESSAGE.INVALID_INPUT);
  }

  if (hasDuplicates(carNames)) {
    throwError(ERROR_MESSAGE.DUPLICATE_INPUT);
  }
};

const validateAttemptCount = (input) => {
  if (isEmpty(input)) {
    throwError(ERROR_MESSAGE.EMPTY_INPUT);
  }

  if (!isPositiveInteger(input)) {
    throwError(ERROR_MESSAGE.INVALID_ATTEMPTS_COUNT);
  }

  return true;
};

export {
  validateCarName,
  validateAttemptCount
};
