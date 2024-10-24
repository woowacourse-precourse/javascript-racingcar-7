import { ERROR_MESSAGES } from './constants.js';

export const validateCarNames = (names) => {
  if (names.length === 0) {
    throw new Error(ERROR_MESSAGES.EMPTY_NAMES);
  }
  if (new Set(names).size !== names.length) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NAMES);
  }
};

export const validateAttempts = (attempts) => {
  const number = Number(attempts);
  if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
    throw new Error(ERROR_MESSAGES.INVALID_ATTEMPTS);
  }
};