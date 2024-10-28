import { printMessage } from './utils/Console.js';
import { GAME_MESSAGE } from './constants/Message.js';

class RaceStatusDisplay {
  static printRaceStartMessage() {
    printMessage(GAME_MESSAGE.EXECUTION_RESULT);
  }

  static printRoundStatus(cars) {
    cars.forEach(car => {
      printMessage(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
    });
    printMessage('');
  }

  static printWinners(winners) {
    const finalWinners = `${GAME_MESSAGE.WINNERS}${winners.join(', ')}`;
    printMessage(finalWinners);
  }
}

export default RaceStatusDisplay;
