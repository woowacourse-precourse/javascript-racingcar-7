import { ERROR_MESSAGE, NAME_SEPARATOR, REGEX } from './constants';

const splitCarNames = (value) => {
  return value.split(NAME_SEPARATOR);
};

export const validateCarName = (value) => {
  const carNames = splitCarNames(value);

  carNames.map((carName) => {
    if (!REGEX.carName.test(carName)) throw new Error(ERROR_MESSAGE.carNameCharacterCountError);
  });
};

export const validateRoundCount = (value) => {
  if (REGEX.roundCount.test(value)) throw new Error(ERROR_MESSAGE.roundCountFormat);
};
