import Car from './Car.js';
import OutputView from './OutputView.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Game {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  start(rounds) {
    for (let i = 0; i < rounds; i++) {
      this.cars.forEach((car) => {
        const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomValue >= 4) car.move();
      });
      OutputView.printPositions(this.cars);
    }
  }
}

export default Game;
