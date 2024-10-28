import { printMessage } from './utils/Console.js';
import { GAME_MESSAGE } from './constants/Message.js';
import { SYMBOLS } from './constants/Symbol.js';

class RaceStatusDisplay {
  static printRaceStartMessage() {
    printMessage(GAME_MESSAGE.EXECUTION_RESULT);
  }

  static printRoundStatus(cars) {
    cars.forEach(car => {
      printMessage(
        `${car.getName()} : ${SYMBOLS.RACE_PROGRESS.repeat(car.getPosition())}`,
      );
    });
    printMessage(SYMBOLS.LINE_BREAK);
  }

  static printWinners(winners) {
    const finalWinners = `${GAME_MESSAGE.WINNERS}${winners.join(SYMBOLS.WINER_DELIMITER)}`;
    printMessage(finalWinners);
  }
}

export default RaceStatusDisplay;
