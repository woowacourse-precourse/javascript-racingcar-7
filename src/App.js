import { MissionUtils } from '@woowacourse/mission-utils';

import Car from './Car.js';

class App {
  constructor() {
    this.carList = [];
  }

  async run() {
    this.carList = this.makeCars([]);
  }

  makeCars(names) {
    return names.map((name) => new Car(name));
  }

  getCarList() {
    return this.carList;
  }

  repeat(number) {
    for (let i = 0; i < number; i++) {
      this.moveCarForward(this.car);
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
