import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../utils/constants.js';

const OutputView = {
  printGameStart() {
    Console.print(OUTPUT_MESSAGES.GAME_START);
  },

  formatCarStatus(car) {
    const position = '-'.repeat(car.getPosition());
    return `${car.getName()} : ${position}`;
  },

  printRoundStatus(cars) {
    cars.forEach((car) => {
      Console.print(this.formatCarStatus(car));
    });
    Console.print('');
  },

  formatWinners(winners) {
    return winners.map((car) => car.getName()).join(', ');
  },

  printWinners(winners) {
    const winnerText = this.formatWinners(winners);
    Console.print(`${OUTPUT_MESSAGES.WINNERS_PREFIX}${winnerText}`);
  },

  throwError(message) {
    throw new Error(`${OUTPUT_MESSAGES.ERROR_PREFIX} ${message}`);
  },
};

export default OutputView;
