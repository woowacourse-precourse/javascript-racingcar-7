import { ERROR_MESSAGE, REGEX } from './constants.js';
import { splitCarNames } from './utils/splitCarNames.js';

export const validateCarName = (value) => {
  const carNames = splitCarNames(value);

  carNames.map((carName) => {
    if (!REGEX.carName.test(carName)) throw new Error(ERROR_MESSAGE.carNameCharacterCountError);
  });
};

export const validateRoundCount = (value) => {
  if (REGEX.roundCount.test(value)) throw new Error(ERROR_MESSAGE.roundCountFormat);
};
