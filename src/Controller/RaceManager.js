import { getRandomNumber } from '../util/getRandomNumber.js';

import { printWinner } from '../View/printWinner.js';

export class RaceManager {
  constructor(carArray) {
    this.carArray = carArray;
  }

  runRaceStep() {
    this.carArray.map((car) => {
      if (getRandomNumber() >= 4) {
        car.move();
      }
    });
  }

  showRaceStep() {
    this.carArray.forEach((car) => {
      printDistance(car);
    });
  }

  getMaxDistance() {
    return this.carArray.reduce(
      (acc, current) => (acc > current.distance ? acc : current.distance),
      0,
    );
  }

  getWinnerCar(maxDistance) {
    return this.carArray.filter((car) => car.distance === maxDistance);
  }
}
