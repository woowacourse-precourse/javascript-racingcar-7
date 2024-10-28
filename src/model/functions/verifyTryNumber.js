import { ERROR } from '../../constants/constants.js';

export const verifyTryNumber = (tryCount) => {
  if (isNaN(tryCount) || !Number.isInteger(Number(tryCount)))
    throw new Error(ERROR.TRY_NUMBER_INPUT);

  if (tryCount <= 0) throw Error(ERROR.TRY_NUMBER_RANGE);

  return tryCount;
};
