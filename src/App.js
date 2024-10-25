import { MissionUtils } from '@woowacourse/mission-utils';

import Car from './Car.js';

import { getCarName, splitCarName, getAttemptCount } from './InputUtils.js';
import { printWinnerCar } from './OutputUtils.js';

class App {
  constructor() {
    this.carList = [];
  }

  async run() {
    const carNames = await getCarName();
    const splittedCarName = splitCarName(carNames);
    const attemptCount = await getAttemptCount();

    this.carList = this.makeCars(splittedCarName);
    this.repeat(attemptCount);

    const winnerNames = this.findCarWithMaxPosition(this.getMaxPosition());
    printWinnerCar(winnerNames);
  }

  makeCars(names) {
    return names.map((name) => new Car(name));
  }

  getCarList() {
    return this.carList;
  }

  getMaxPosition() {
    return Math.max(...this.carList.map((car) => car.position));
  }

  findCarWithMaxPosition(maxPosition) {
    return this.carList
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }

  repeat(number) {
    for (let i = 0; i < number; i++) {
      this.carList.forEach((car) => this.moveCarForward(car));
    }
  }

  moveCarForward(car) {
    if (this.isHighEnough()) {
      car.move();
    }
  }

  isHighEnough() {
    const randomValue = MissionUtils.Random.pickNumberInRange(1, 10);
    return randomValue >= 4;
  }
}

export default App;
