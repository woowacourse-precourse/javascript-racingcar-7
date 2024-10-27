import { randomNumber } from '../utils/randomNumberMaker.js';
import { DEFAULT_OBJECT_VALUES, RACE } from '../utils/constants.js';
import { printRaceRound, printCarStats, printLineSpace } from '../view/raceView.js';

export class Race {
  #carList;
  #raceCurrentRound;
  #raceMaxRound;

  constructor(carList, raceMaxRound) {
    this.#carList = [...carList];
    this.#raceCurrentRound = DEFAULT_OBJECT_VALUES;
    this.#raceMaxRound = raceMaxRound;
  }

  roundStart() {
    this.#carList.forEach((car) => {
      if (RACE.RACE_MOVE_CONDITION <= randomNumber(RACE.MIN_RANDOM_NUMBER, RACE.MAX_RANDOM_NUMBER)) {
        car.move();
      }
    });
    this.#raceCurrentRound++;
  }

  isRaceOver() {
    if (this.#raceMaxRound <= this.#raceCurrentRound) {
      return false;
    }
    return true;
  }

  showRaceStatusByRound() {
    printLineSpace();
    printRaceRound(this.#raceCurrentRound);
    this.#carList.forEach((car) => {
      printCarStats(car.getName(), car.getLocation());
    });
  }

  getFinalWinner() {
    let furthestLocation = DEFAULT_OBJECT_VALUES;
    let winner = [];

    this.#carList.forEach((car) => {
      if (furthestLocation < car.getLocation()) {
        furthestLocation = car.getLocation();
      }
    });

    this.#carList.forEach((car) => {
      if (furthestLocation == car.getLocation()) {
        winner.push(car.getName());
      }
    });

    return winner;
  }
}
