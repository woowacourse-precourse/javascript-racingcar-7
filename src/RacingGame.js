import RacingCars from './models/RacingCars.js';
import RaceStatusDisplay from './RaceStatusDisplay.js';
import { GAME_SETTINGS, SYMBOLS } from './constants/Symbol.js';

class RacingGame {
  #racingCars;
  #attempt;

  constructor(carNameList, roundAttempt) {
    this.#racingCars = new RacingCars(carNameList);
    this.#attempt = roundAttempt;
  }

  startRace() {
    RaceStatusDisplay.printRaceStartMessage();

    for (let Racing = SYMBOLS.START_POINT; Racing < this.#attempt; Racing++) {
      this.#racingCars.moveCarsInRound();
      RaceStatusDisplay.printRoundStatus(this.#racingCars.getCars());
    }
  }

  getWinners() {
    const currentCars = this.#racingCars.getCars();
    const maxPosition = Math.max(...currentCars.map(car => car.getPosition()));

    if (maxPosition === GAME_SETTINGS.INITIAL_POSITION) {
      return currentCars.map(car => car.getName());
    }

    return currentCars
      .filter(car => car.getPosition() === maxPosition)
      .map(car => car.getName());
  }
}

export default RacingGame;
