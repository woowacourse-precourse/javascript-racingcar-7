import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';

export default class Race {
  constructor(carNames) {
    this.cars = this.createCars(carNames);
  }

  createCars(carNames) {
    const names = carNames.split(',').map((name) => name.trim());
    return names.map((name) => new Car(name));
  }

  validateAttempts(attempts) {
    if (isNaN(attempts) || attempts < 1) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.');
    }
  }

  async race(attempts) {
    const attemptCount = parseInt(attempts);
    this.validateAttempts(attemptCount);

    for (let i = 0; i < attemptCount; i++) {
      await this.playOneRound();
    }
  }

  async playOneRound() {
    for (const car of this.cars) {
      const number = MissionUtils.Random.pickNumberInRange(0, 9);
      car.move(number);
    }
    this.printRoundResult();
  }

  printRoundResult() {
    this.cars.forEach((car) => {
      MissionUtils.Console.print(car.getStatus());
    });
    MissionUtils.Console.print('');
  }
}
