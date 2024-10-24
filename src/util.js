import { Console } from '@woowacourse/mission-utils';

export const errorString = (message) => `[ERROR] ${message}`;

export const getUserInput = async (message) => Console.readLineAsync(message);
