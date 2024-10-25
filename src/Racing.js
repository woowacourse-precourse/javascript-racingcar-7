import { Console, Random } from '@woowacourse/mission-utils';

import { COMMON_MESSAGE } from './message.js';
import { printCarMovement } from './util/util.js';

export default class Racing {
  constructor(cars, count) {
    this.cars = cars;
    this.count = count;
  }
  doRace() {
    const carModels = this.cars.split(",").map((car) => ({
      name: car,
      movementCount: 0,
    }));

    Console.print(COMMON_MESSAGE.EXECUTE);

    for (let i = 0; i < this.count; i++) {
      this.movementLoop(carModels);
    }

    return carModels;
  }

  movementLoop(carModels) {
    for (const car of carModels) {
      this.eachMovement(car);
    }
    Console.print("");
  }

  eachMovement(car) {
    const movementValue = Random.pickNumberInRange(0, 9);
    if (movementValue >= 4) {
      car.movementCount++;
    }
    printCarMovement(car);
  }
}
