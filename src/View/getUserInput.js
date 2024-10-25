import { Console } from '@woowacourse/mission-utils';
import { TYPE_INPUT_MESSAGE } from '../constant/errorMessage.js';

export const getUserInput = (message) => {
  const userInput = Console.readLineAsync(message + '\n');
  if (!userInput) {
    throw new Error(`[ERROR]: ${TYPE_INPUT_MESSAGE}}`);
  }
  return userInput;
};
