import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constant/index.js';

class OutputView {
  static printRaceResult(raceResult) {
    Console.print(raceResult.map((inner) => inner.join('\n')).join('\n\n'));
  }

  static racingStartIntro() {
    Console.print(OUTPUT_MESSAGE.RACING_START_INTRO);
  }

  static printWinner(winners) {
    Console.print(`\n${OUTPUT_MESSAGE.FINAL_WINNER + winners.join(',')}`);
  }
}

export default OutputView;
