import { ERROR_MESSAGES } from '../constants/errorMessages.js';

// 이거 커ㅣㅅ해야됨 리리펙토링도 필요
const isValidLength = (carNames) => {
  const UNDER_SIX = carNames.every((element) => element.length < 6);
  return UNDER_SIX;
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
