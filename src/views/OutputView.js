import MESSAGE from '../constants/Message.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class OutputView {
  static printRoundResult(name, advance) {
    MissionUtils.Console.print(MESSAGE.RESULT.ROUND(name, advance));
  }
  static printBreakPoint() {
    MissionUtils.Console.print(MESSAGE.RESULT.BREAK_POINT);
  }

  static printGameResult(winnerNamesArray) {
    const winnerNames = winnerNamesArray.join(', ');

    MissionUtils.Console.print(MESSAGE.RESULT.GAME(winnerNames));
  }
}

export default OutputView;
