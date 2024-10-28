import Car from './Car.js';
import { Random } from '@woowacourse/mission-utils';

export default class Race {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  proceedRound() {
    this.cars.forEach((car) => car.move(Random.pickNumberInRange(0, 9)));
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    return this.cars.filter((car) => car.getPosition() === maxPosition);
  }

  getCars() {
    return this.cars;
  }
}
