import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from './constant.js';

export const errorString = (message) => `[ERROR] ${message}`;

export const isInputEmpty = (input) => input.trim().length === 0;

export const getUserInput = async (message) => {
  const input = await Console.readLineAsync(message);
  if (isInputEmpty(input)) {
    throw new Error(errorString(CONSOLE_MESSAGE.EMPTY_INPUT_ERROR));
  }

  return input;
};

export const isNumber = (num) => !Number.isNaN(num);

export const isPositiveNumber = (num) => num > 0;

export const isIntegerNumber = (num) => Number.isInteger(num);
