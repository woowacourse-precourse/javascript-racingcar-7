import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MSG } from '../../constants/promptMessage.js';

const userInput = async () => {
  const input = await Console.readLineAsync(`${PROMPT_MSG.COUNT}\n`);
  return input;
};

export default userInput;
