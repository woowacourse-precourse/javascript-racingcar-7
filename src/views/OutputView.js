import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';

class OutputView {
  printGameStart() {
    Console.print(MESSAGES.OUTPUT.GAME_START);
  }

  printRaceProgress(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
    });
  }

  printWinners(winners) {
    Console.print(`${MESSAGES.OUTPUT.WINNERS}${winners}`);
  }
}

export default OutputView;
