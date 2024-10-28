import { ERROR_PREFIX, ERROR_MESSAGES, REGEX } from '../constant.js';

const throwValidationError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}`);
};

const validateInputExists = (input, message) => {
  if (!input) {
    throwValidationError(message);
  }
};

const validateDelimiter = (input) => {
  if (REGEX.isInvalidDelimiter.test(input)) {
    throwValidationError(ERROR_MESSAGES.invalidDelimiter);
  }
};

const validateDuplication = (input) => {
  const carNames = input.split(',');
  const uniqueCarNames = new Set(carNames);

  if (uniqueCarNames.size !== carNames.length) {
    throwValidationError(ERROR_MESSAGES.duplicateCarName);
  }
};

const validateNameInputFormat = (input) => {
  if (!REGEX.isValidCarNameFormat.test(input)) {
    throwValidationError(ERROR_MESSAGES.invalidCarNameFormat);
  }
};

const validateRoundCountFormat = (input) => {
  if (!REGEX.isValidRoundCountFormat.test(input)) {
    throwValidationError(ERROR_MESSAGES.invalidRoundCountFormat);
  }
};

export const validateCarNames = (input) => {
  validateInputExists(input, ERROR_MESSAGES.emptyCarName);
  validateDelimiter(input);
  validateDuplication(input);
  validateNameInputFormat(input);
};

export const validateRoundCount = (input) => {
  validateInputExists(input, ERROR_MESSAGES.emptyRoundCount);
  validateRoundCountFormat(input);
};
