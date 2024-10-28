import { ERROR_MESSAGE } from '../constants/errorMessages.js';

const {
  INVALID_CAR_NAMES_LENGTH,
  INVALID_CAR_NAME_LENGTH,
  DUPLICATE_CAR_NAMES,
  INVALID_TRY_COUNT,
} = ERROR_MESSAGE;

const validateCarNameListLength = (carNames) => {
  if (carNames.length < 2) {
    throw new Error(INVALID_CAR_NAMES_LENGTH);
  }
};

const validateCarNameLength = (carNames) => {
  if (carNames.some((name) => name.length > 5)) {
    throw new Error(INVALID_CAR_NAME_LENGTH);
  }
};

const validateDuplicateCarNames = (carNames) => {
  if (new Set(carNames).size !== carNames.length) {
    throw new Error(DUPLICATE_CAR_NAMES);
  }
};

const validateCarNames = (carNames) => {
  validateCarNameListLength(carNames);
  validateCarNameLength(carNames);
  validateDuplicateCarNames(carNames);
};

const validateTryCount = (tryCount) => {
  if (isNaN(tryCount) || tryCount <= 0 || !Number.isInteger(tryCount)) {
    throw new Error(INVALID_TRY_COUNT);
  }
};

export { validateCarNames, validateTryCount };
