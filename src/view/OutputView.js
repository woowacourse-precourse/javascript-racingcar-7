import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constant/index.js';

class OutputView {
  static printBlankLine() {
    Console.print('');
  }

  static printArrayWithNewLine(arr) {
    Console.print(`${arr.join('\n')}`);
  }

  static racingStartIntro() {
    Console.print(OUTPUT_MESSAGE.RACING_START_INTRO);
  }

  static printWinner(winners) {
    Console.print(OUTPUT_MESSAGE.FINAL_WINNER + winners.join(','));
  }
}

export default OutputView;
