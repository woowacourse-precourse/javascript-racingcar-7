import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constant/index.js';

class OutputView {
  static printBlankLine() {
    Console.print('');
  }

  static racingStartIntro() {
    Console.print(OUTPUT_MESSAGE.RACING_START_INTRO);
  }

  static printCarState(carName, distance) {
    let newDistance = '';
    for (let i = 0; i < distance; i += 1) {
      newDistance += OUTPUT_MESSAGE.STRINGYFY_DISTANCE;
    }

    Console.print(`${carName} : ${newDistance}`);
  }

  static printWinner(winners) {
    Console.print(OUTPUT_MESSAGE.FINAL_WINNER + winners.join(','));
  }
}

export default OutputView;
