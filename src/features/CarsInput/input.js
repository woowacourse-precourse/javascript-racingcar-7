import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MSG } from '../../constants/promptMessage.js';

const userInput = async () => {
  return await Console.readLineAsync(`${PROMPT_MSG.CARS}\n`);
};

export default userInput;
