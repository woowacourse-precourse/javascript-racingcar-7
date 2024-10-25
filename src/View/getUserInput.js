import { Console } from '@woowacourse/mission-utils';
import { EMPTY_INPUT_MESSAGE } from '../constant/errorMessage';

export const getUserInput = (message) => {
  const userInput = Console.readLineAsync(message + '\n');
  if (!userInput) {
    return new Error(`[Error]: ${EMPTY_INPUT_MESSAGE}}`);
  }
  return userInput;
};
