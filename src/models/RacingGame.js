// src/models/RacingGame.js
import Car from './Car.js';
import WinnerCalculator from '../utils/WinnerCalculator.js';

export default class RacingGame {
  constructor(playerNames) {
    this.cars = playerNames.map(name => new Car(name));
  }

  race(time, randomGenerator) {
    for (let i = 0; i < time; i++) {
      this.runRound(randomGenerator);
    }
  }

  runRound(randomGenerator) {
    this.cars.forEach(car => {
      if (randomGenerator() >= 4) {
        car.move();
      }
    });
  }

  getWinners() {
    return WinnerCalculator.calculateWinners(this.cars);
  }

  getCarsStatus() {
    return this.cars.map(car => `${car.name} : ${car.getPositionStr()}`);
  }
}
