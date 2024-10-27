import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../constant/message.js';

class InputView {
  getCarNames() {
    return Console.readLineAsync(GAME_MESSAGE.CAR_NAMES_INPUT);
  }

  getAttemptCount() {
    return Console.readLineAsync(GAME_MESSAGE.ATTEMPT_COUNT_INPUT);
  }
}

export default InputView;
