import { printMessage } from './utils/Console.js';

class RaceStatusDisplay {
  static printRaceStartMessage() {
    printMessage('\n실행 결과');
  }

  static printRoundStatus(cars) {
    cars.forEach(car => {
      printMessage(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
    });
    printMessage('');
  }

  static printWinners(winners) {
    const finalWinners = `최종 우승자 : ${winners.join(', ')}`;
    printMessage(finalWinners);
  }
}

export default RaceStatusDisplay;
