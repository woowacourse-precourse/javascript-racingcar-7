import Car from './Car.js';
import OutputView from './OutputView.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Game {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
    this.maxPosition = 0;
    this.winners = [];
  }

  start(rounds) {
    for (let i = 0; i < rounds; i++) {
      this.cars.forEach((car) => {
        const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomValue >= 4) {
          car.move();
          if (car.getPosition() > this.maxPosition) {
            this.maxPosition = car.getPosition();
            this.winners = [car.getName()];
          } else if (car.getPosition() === this.maxPosition) {
            this.winners.push(car.getName());
          }
        }
      });
      OutputView.printPositions(this.cars);
    }
  }

  getWinners() {
    return this.winners;
  }
}

export default Game;
