import { ERROR_MESSAGES, RULES } from '../constants/index.js';

export const validateCarNames = (carNames) => {
  validateCarNameLength(carNames);
  validateNoEmptyName(carNames);
  validateNoDuplicates(carNames);
};

export const validateTryCount = (tryCount) => {
  validateIsNumber(tryCount);
  validateIsPositive(tryCount);
};

export const validateCarNameLength = (carNames) => {
  if (carNames.some((name) => name.length > RULES.CAR_MAX_LENGTH)) {
    throw new Error(ERROR_MESSAGES.CAR_ERROR_MESSAGES.TOO_LONG);
  }
};

export const validateNoEmptyName = (carNames) => {
  if (carNames.some((name) => name === '')) {
    throw new Error(ERROR_MESSAGES.CAR_ERROR_MESSAGES.NO_NAME);
  }
};

export const validateNoDuplicates = (carNames) => {
  if (new Set(carNames).size !== carNames.length) {
    throw new Error(ERROR_MESSAGES.CAR_ERROR_MESSAGES.DUPLICATE);
  }
};

export const validateIsNumber = (tryCount) => {
  if (isNaN(tryCount)) {
    throw new Error(ERROR_MESSAGES.COUNT_ERROR_MESSAGES.ONLY_NUMBER);
  }
};

export const validateIsPositive = (tryCount) => {
  if (tryCount < 1) {
    throw new Error(ERROR_MESSAGES.COUNT_ERROR_MESSAGES.NOT_NEGATIVE);
  }
};
