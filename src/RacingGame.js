import RacingCars from './models/RacingCars.js';
import RaceStatusDisplay from './RaceStatusDisplay.js';

class RacingGame {
  #racingCars;
  #attempt;

  constructor(carNameList, roundAttempt) {
    this.#racingCars = new RacingCars(carNameList);
    this.#attempt = roundAttempt;
  }

  startRace() {
    RaceStatusDisplay.printRaceStartMessage();

    for (let i = 0; i < this.#attempt; i++) {
      this.#racingCars.moveCarsInRound();
      RaceStatusDisplay.printRoundStatus(this.#racingCars.getCars());
    }
  }

  getWinners() {
    const currentCars = this.#racingCars.getCars();
    const maxPosition = Math.max(...currentCars.map(car => car.getPosition()));

    if (maxPosition === 0) {
      return currentCars.map(car => car.getName());
    }

    return currentCars
      .filter(car => car.getPosition() === maxPosition)
      .map(car => car.getName());
  }
}

export default RacingGame;
