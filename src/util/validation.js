import { CAR_ERROR, TRYNUMBER_ERROR } from './constant.js';

export const validTryNumber = (number) => {
  const isNotNumber = isNaN(number);
  const isEmpty = number.length === 0;
  const isOver50 = number > 50;

  if (isNotNumber) throw Error(TRYNUMBER_ERROR.NOT_NUMBER);
  if (isEmpty) throw Error(TRYNUMBER_ERROR.NOT_BLANK);
  if (isOver50) throw Error(TRYNUMBER_ERROR.NOT_OVER_50);
};

export const validCarName = (names) => {
  const carSet = new Set(names);
  const isNameLengthOver5 = names.some((name) => name.length > 5);
  const isEmpty = names.some((name) => name === '');
  const isCarsLengthUnder2 = names.length < 2;
  const isDuplicate = names.length !== carSet.size;

  if (isNameLengthOver5) throw Error(CAR_ERROR.NOT_OVER_5);
  if (isEmpty) throw Error(CAR_ERROR.NOT_BLANK);
  if (isCarsLengthUnder2) throw Error(CAR_ERROR.NOT_UNDER_2);
  if (isDuplicate) throw Error(CAR_ERROR.NOT_DUPLICATE);
};
