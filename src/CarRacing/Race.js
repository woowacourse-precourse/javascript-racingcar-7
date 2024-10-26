import Cars from './Cars.js';
import { repeat } from './Utils/repeat.js';

class Race {
  #cars;

  #startRace(raceCount) {
    repeat(raceCount, () => {
      this.#cars.moveAllCars();
      this.#cars.updateRaceHistory();
    });
  }

  #setCars(carNames) {
    this.#cars = new Cars(carNames);
  }

  result(carNames, raceCount) {
    this.#setCars(carNames);
    this.#startRace(raceCount);
    return {
      winnerNames: this.#cars.getWinnerNames(),
      history: this.#cars.getRaceHistory(),
    };
  }
}

export default Race;
