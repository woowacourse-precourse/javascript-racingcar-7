import RacingCars from './models/RacingCars.js';
import RaceStatusDisplay from './RaceStatusDisplay.js';

class RacingGame {
  #racingCars;
  #attempt;

  constructor(carNameList, roundAttempt) {
    this.#racingCars = new RacingCars(carNameList);
    this.#attempt = roundAttempt;
  }

  Racing() {
    RaceStatusDisplay.printRaceStartMessage();

    for (let i = 0; i < this.#attempt; i++) {
      this.#racingCars.moveCarsInRound();
      RaceStatusDisplay.printRoundStatus(this.#racingCars.getCars());
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
