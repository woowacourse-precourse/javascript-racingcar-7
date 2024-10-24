import { Console } from '@woowacourse/mission-utils';

export const getUserInput = (message) => {
  const userInput = Console.readLineAsync(message + '\n');
  return userInput;
};
