import { ERROR_PREFIX, ERROR_MESSAGES, REGEX } from '../constant.js';

const throwValidationError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}`);
};

const checkInputExists = (input, message) => {
  if (!input) {
    throwValidationError(message);
  }
};

const checkDelimiter = (input) => {
  if (REGEX.isInvalidDelimiter.test(input)) {
    throwValidationError(ERROR_MESSAGES.invalidDelimiter);
  }
};

const checkDuplication = (input) => {
  const carNames = input.split(',');
  const uniqueCarNames = new Set(carNames);

  if (uniqueCarNames.size !== carNames.length) {
    throwValidationError(ERROR_MESSAGES.duplicateCarName);
  }
};

const checkNameInputFormat = (input) => {
  if (!REGEX.isValidCarNameFormat.test(input)) {
    throwValidationError(ERROR_MESSAGES.invalidCarNameFormat);
  }
};

const checkRoundCountFormat = (input) => {
  if (!REGEX.isValidRoundCountFormat.test(input)) {
    throwValidationError(ERROR_MESSAGES.invalidRoundCountFormat);
  }
};

export const validateCarNames = (input) => {
  checkInputExists(input, ERROR_MESSAGES.emptyCarName);
  checkDelimiter(input);
  checkDuplication(input);
  checkNameInputFormat(input);
};

export const validateRoundCount = (input) => {
  checkInputExists(input, ERROR_MESSAGES.emptyRoundCount);
  checkRoundCountFormat(input);
};
