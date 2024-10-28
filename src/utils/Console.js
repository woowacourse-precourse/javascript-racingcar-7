import { Console } from '@woowacourse/mission-utils';

export const getUserInput = message => Console.readLineAsync(message);

export const printMessage = message => {
  Console.print(message);
};
