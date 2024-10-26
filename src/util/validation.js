import { TRYNUMBER_ERROR } from './constant.js';

export const validTryNumber = (number) => {
  const isNotNumber = isNaN(number);
  const isEmpty = number.length === 0;
  const isOver50 = number > 50;
  if (isNotNumber) throw Error(TRYNUMBER_ERROR.NOT_NUMBER);
  if (isEmpty) throw Error(TRYNUMBER_ERROR.NOT_BLANK);
  if (isOver50) throw Error(TRYNUMBER_ERROR.NOT_OVER_50);
};
