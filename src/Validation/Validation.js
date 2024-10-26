import { ERROR } from '../Constants/Message.js';

export const nameValidation = (input) => {
  if (!input) throw new Error(`${ERROR.HEADER}${ERROR.NAMES_IS_NOT_EMPTY}`);

  const carNames = input.split(',');
  carNames.forEach((name) => {
    if (!name) throw new Error(`${ERROR.HEADER}${ERROR.NAME_IS_NOT_EMPTY}`);

    if (/\s/g.test(name))
      throw new Error(`${ERROR.HEADER}${ERROR.NAME_IS_NOT_SPACE}`);

    if (name.length > 5)
      throw new Error(`${ERROR.HEADER}${ERROR.NAME_IS_MAX_FIVE}`);
  });

  if (carNames.length !== new Set(carNames).size)
    throw new Error(`${ERROR.HEADER}${ERROR.NAME_IS_NOT_SAME}`);
};

export const tryCountValidation = (input) => {
  if (!input) throw new Error(`${ERROR.HEADER}${ERROR.COUNT_IS_NOT_EMPTY}`);

  const tryCount = parseInt(input, 10);
  if (Number.isNaN(tryCount))
    throw new Error(`${ERROR.HEADER}${ERROR.COUNT_IS_NUMBER}`);

  if (tryCount <= 0)
    throw new Error(`${ERROR.HEADER}${ERROR.COUNT_IS_POSITIVE_NUMBER}`);

  if (/\./.test(input))
    throw new Error(`${ERROR.HEADER}${ERROR.COUNT_IS_NOT_PRIME_NUMBER}`);
};
