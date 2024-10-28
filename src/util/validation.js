import { CAR_ERROR, TRYNUMBER_ERROR } from './constant.js';

export const validTryNumber = (number) => {
  const IS_NOT_NUMBER = isNaN(number);
  const IS_EMPTY = number.length === 0;
  const IS_OVER_50 = number > 50;

  if (IS_NOT_NUMBER) throw Error(TRYNUMBER_ERROR.NOT_NUMBER);
  if (IS_EMPTY) throw Error(TRYNUMBER_ERROR.NOT_BLANK);
  if (IS_OVER_50) throw Error(TRYNUMBER_ERROR.NOT_OVER_50);
};

export const validCarName = (names) => {
  const carSet = new Set(names);
  const IS_NAME_LENGTH_OVER_5 = names.some((name) => name.length > 5);
  const IS_EMPTY = names.some((name) => name === '');
  const IS_LENGTH_UNDER_2 = names.length < 2;
  const IS_DUPLICATE = names.length !== carSet.size;

  if (IS_NAME_LENGTH_OVER_5) throw Error(CAR_ERROR.NOT_OVER_5);
  if (IS_EMPTY) throw Error(CAR_ERROR.NOT_BLANK);
  if (IS_LENGTH_UNDER_2) throw Error(CAR_ERROR.NOT_UNDER_2);
  if (IS_DUPLICATE) throw Error(CAR_ERROR.NOT_DUPLICATE);
};
