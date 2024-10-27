import Car from './Car.js';
import { Console } from '@woowacourse/mission-utils';
import getMostMovedCar from './utils/getMostMovedCar.js';
import INPUT_OUTPUT_MESSAGES from './constants/inputOutputMessages.js';

class CarRacing {
  constructor(cars, count) {
    this.cars = cars.map((car) => new Car(car));
    this.count = count;
  }

  startRace() {
    Console.print(`\n${INPUT_OUTPUT_MESSAGES.OUTPUT_RESULT}`);

    for (let i = 0; i < this.count; i++) {
      this.race();
      this.printResult();
    }

    this.printWinners();
  }

  race() {
    this.cars.forEach((car) => car.moveForward());
  }

  printResult() {
    this.cars.forEach((car) =>
      Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`)
    );

    Console.print('');
  }

  printWinners() {
    const winner = getMostMovedCar(this.cars);
    Console.print(`${INPUT_OUTPUT_MESSAGES.OUTPUT_WINNER}${winner.join(', ')}`);
  }
}

export default CarRacing;
