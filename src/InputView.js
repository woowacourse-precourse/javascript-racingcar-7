import { Console } from '@woowacourse/mission-utils';
import { INPUT_PROMPT } from './constants.js';

const InputView = {
  async readCarNames() {
    return await Console.readLineAsync(INPUT_PROMPT.readCarNames);
  },
  async readRoundCount() {
    return await Console.readLineAsync(INPUT_PROMPT.readRoundCount);
  },
};

export default InputView;
