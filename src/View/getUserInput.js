import { Console } from '@woowacourse/mission-utils';
import { TYPE_INPUT_MESSAGE } from '../constant/errorMessage.js';

export const getUserInput = (message) => {
  const userInput = Console.readLineAsync(message + '\n');

  // 올바르지 않은 값인 null 입력값을 오래 들고있지 않기 위해 입력받자마자 null 값인지 test
  if (!userInput) {
    throw new Error(`[ERROR]: ${TYPE_INPUT_MESSAGE}}`);
  }
  return userInput;
};
