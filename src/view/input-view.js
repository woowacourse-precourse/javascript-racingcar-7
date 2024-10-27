import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../constant/message';

class InputView {
  async getCarNames() {
    const answer = await Console.readLineAsync(GAME_MESSAGE.CAR_NAMES_INPUT);
    return answer;
  }

  async getAttemptCount() {
    await Console.readLineAsync(GAME_MESSAGE.ATTEMPT_COUNT_INPUT);
  }
}

export default InputView;
