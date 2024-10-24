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
}
