import { MissionUtils } from '@woowacourse/mission-utils';

import Car from './Car.js';

class App {
  constructor() {
    this.carList = [];
  }

  async run() {
    this.carList = this.makeCars([]);
    const carNames = await this.getCarName();
  }

  async getCarName() {
    return await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
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
