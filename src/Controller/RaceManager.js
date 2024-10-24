import { Car } from '../Model/Car.js';
import { getRandomNumber } from '../util/getRandomNumber.js';
import { printDistance } from '../View/printDistance.js';

import { printWinner } from '../View/printWinner.js';

export class RaceManager {
  constructor() {
    this.carArray = [];
  }

  makeCar(name) {
    this.carArray = [...this.carArray, new Car(name)];
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
  
  announceWinner(winner) {
    printWinner(winner.map((car) => car.name));
  }
}
