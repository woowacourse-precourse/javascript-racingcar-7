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
    const winnerString = winners.map((car) => car.getName()).join(', ');
    Console.print(`${MESSAGES.OUTPUT.WINNERS}${winnerString}`);
  }
}

export default OutputView;
