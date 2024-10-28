import { Console } from '@woowacourse/mission-utils';

export const errorString = (message) => `[ERROR] ${message}`;

export const isInputEmpty = (input) => input.trim().length === 0;

export const printEmptyString = () => Console.print('');

export const isNumber = (num) => !Number.isNaN(num);

export const isPositiveNumber = (num) => num > 0;

export const isIntegerNumber = (num) => Number.isInteger(num);
