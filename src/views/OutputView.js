import MESSAGE from '../constants/Message.js';
import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printRoundResult(name, advance) {
    Console.print(MESSAGE.RESULT.ROUND(name, advance));
  }
  static printBreakPoint() {
    Console.print(MESSAGE.RESULT.BREAK_POINT);
  }

  static printGameResult(winnerNamesArray) {
    const winnerNames = winnerNamesArray.join(', ');

    Console.print(MESSAGE.RESULT.GAME(winnerNames));
  }
}

export default OutputView;
