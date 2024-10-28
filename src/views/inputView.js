import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../utils/constants.js';

const InputView = {
  async readCarNames() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.CAR_NAMES);

    return this.parseCarNames(input);
  },

  parseCarNames(input) {
    return input.split(',').map((name) => name.trim());
  },

  async readGameRounds() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.GAME_ROUNDS);
    return input;
  },
};

export default InputView;
