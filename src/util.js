import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from './constant.js';

export const errorString = (message) => `[ERROR] ${message}`;

export const isInputEmpty = (input) => input.trim().length === 0;

export const getUserInput = async (message) => {
  const input = await Console.readLineAsync(message);
  if (!input || isInputEmpty(input)) {
    throw new Error(errorString(ERROR_MESSAGE.EMPTY_INPUT));
  }

  return input;
};

export const printEmptyString = () => Console.print('');

export const isNumber = (num) => !Number.isNaN(num);

export const isPositiveNumber = (num) => num > 0;

export const isIntegerNumber = (num) => Number.isInteger(num);
