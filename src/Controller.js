import { Console } from '@woowacourse/mission-utils';
import { Car } from './Car.js';
import { attempsTest } from './Constants.js';

export class raceController {
  constructor(inputNames, inputAttemps) {
    attempsTest(inputAttemps);
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
      this.printCarPosition(car);
    });
    Console.print('\n');
  }

  printCarPosition(car) {
    const printPosition = '-'.repeat(car.getPosition());
    Console.print(`${car.getName()} : ${printPosition}`);
  }

  raceAttemps() {
    for (let i = 0; i < this.attemps; i++) {
      this.raceResult();
    }
  }

  raceWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars
      .filter((car) => car.getPosition() == maxPosition)
      .map((car) => car.getName());
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}
