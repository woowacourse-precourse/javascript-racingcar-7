import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../utils/constants';

export default class OutputView {
  static printGameStart() {
    Console.print(OUTPUT_MESSAGES.GAME_START);
  }

  static printCarStatus(name, position) {
    Console.print(`${name} : ${position}`);
  }

  static printWinners(winners) {
    Console.print(`${OUTPUT_MESSAGES.WINNERS_PREFIX}${winners}`);
  }

  static printError(message) {
    Console.print(message);
  }
}