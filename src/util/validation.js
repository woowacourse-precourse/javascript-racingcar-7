import { TRYNUMBER_ERROR } from './constant.js';

export const validTryNumber = (number) => {
  const isNotNumber = isNaN(number);
  if (isNotNumber) throw Error(TRYNUMBER_ERROR.NOT_NUMBER);
};
