import { Console } from '@woowacourse/mission-utils';
import { Car } from './Car.js';
import { attempsTest } from './Constants.js';

export class raceController {
  constructor(inputNames, inputAttemps) {
    this.cars = inputNames.split(',').map((name) => new Car(name.trim()));
    this.attemps = inputAttemps;
  }

  startRace() {
    this.raceAttemps();
    this.raceWinner();
  }

  raceResult() {
    this.cars.forEach((car) => {
      car.move();
      const displayLocation = '-'.repeat(car.getLocation());
      Console.print(`${car.getName()} : ${displayLocation}`);
    });
    Console.print('\n');
  }

  raceAttemps() {
    attempsTest(this.attemps);
    for (let i = 0; i < this.attemps; i++) {
      this.raceResult();
    }
  }

  raceWinner() {
    const maxLocation = Math.max(...this.cars.map((car) => car.getLocation()));
    const winners = this.cars
      .filter((car) => car.getLocation() == maxLocation)
      .map((car) => car.getName());
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}
