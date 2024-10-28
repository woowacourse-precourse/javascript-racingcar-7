import { ERROR_PREFIX, ERROR_MESSAGES } from '../constant.js';

const throwValidationError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}`);
};

const validateInputExists = (input, message) => {
  if (!input) {
    throwValidationError(message);
  }
};

export const validateCarNames = (input) => {
  validateInputExists(input, ERROR_MESSAGES.emptyCarName);
};

export const validateRoundCount = (input) => {
  validateInputExists(input, ERROR_MESSAGES.emptyRoundCount);
};
