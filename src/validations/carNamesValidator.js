import { ERROR_MESSAGES } from '../constants/errorMessages.js';

const isValidLength = (carNames) => {
  const lessThanSixCarNames = carNames.every((element) => element.length < 6);
  return lessThanSixCarNames;
};

const validateNotEmpty = (carNames) => {
  if (carNames === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

const validateStringInput = (carNames) => {
  for (let i = 0; i < carNames.length; i += 1) {
    if (!Number.isNaN(parseInt(carNames[i], 10))) {
      throw new Error(ERROR_MESSAGES.NOT_STRING);
    }
  }
};

const validateLength = (carNames) => {
  if (isValidLength(carNames)) {
    return true;
  }
  throw new Error(ERROR_MESSAGES.TOO_LONG);
};

export { validateNotEmpty, validateStringInput, validateLength };
