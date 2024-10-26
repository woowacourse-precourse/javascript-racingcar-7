import { inputCarNames, inputTryCount } from './input.js';
import { validateCarName, validateTryCount } from './validation.js';

export async function carRacingProceed() {
  const carNameList = await inputCarNames();
  validateCarName(carNameList);

  class Car {
    constructor(name, number) {
      (this.name = name), (this.number = number);
    }

    move() {
      let randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        this.number += 1;
      }
    }
  }

  const carList = [];

  for (const carName of carNameList) {
    const car = new Car(carName, 0);
    carList.push(car);
  }

  const tryCount = await inputTryCount();
  validateTryCount(tryCount);

  for (let i = 0; i < tryCount; i++) {
    carList.forEach((car) => car.move());
  }
}
