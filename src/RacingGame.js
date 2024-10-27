import { printMessage } from './utils/Console.js';
import RacingCars from './models/RacingCars.js';

class RacingGame {
  #racingCars;
  #attempt;

  constructor(carNameList, roundAttempt) {
    this.#racingCars = new RacingCars(carNameList);
    this.#attempt = roundAttempt;
  }

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

  Racing() {
    RacingGame.printRaceStartMessage();

    for (let i = 0; i < this.#attempt; i++) {
      this.#racingCars.moveCarsInRound();
      RacingGame.printRoundStatus(this.#racingCars.getCars());
    }
  }

  getWinners() {
    const maxPosition = Math.max(
      ...this.#racingCars.getCars().map(car => car.getPosition()),
    );

    return this.#racingCars
      .getCars()
      .filter(car => car.getPosition() === maxPosition)
      .map(car => car.getName());
  }
}

export default RacingGame;
