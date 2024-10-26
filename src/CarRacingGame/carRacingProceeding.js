import { inputCarNames, inputTryCount } from './input.js';
import { validateCarName, validateTryCount } from './validation.js';

export async function carRacingProceed() {
  const carNameList = await inputCarNames();
  validateCarName(carNameList);

  class Car {
    constructor(name, number) {
      (this.name = name), (this.number = number);
    }
  }

  const carList = [];

  for (const carName of carNameList) {
    const car = new Car(carName, 0);
    carList.push(car);
  }

  const tryCount = await inputTryCount();
  validateTryCount(tryCount);
}
