import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';

class InputView {
  async readCarNames() {
    return Console.readLineAsync(MESSAGES.INPUT.CAR_NAMES);
  }
  async readRacingCount() {
    return Console.readLineAsync(MESSAGES.INPUT.GAME_COUNT);
  }
}

export default InputView;
