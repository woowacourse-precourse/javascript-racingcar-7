import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';
import messages from './printMessages.js';

class RacingGamePlayer {
  constructor(carNames, tryNumber) {
    this.cars = this.createCars(carNames);
    this.roundNumber = tryNumber;
  }

  createCars(carNames) {
    return carNames.map((carName) => new Car(carName));
  }

  moveCars() {
    for (let i = 0; i < this.roundNumber; i++) {
      this.cars.forEach((car) => car.move());
      this.printRoundResults();
    }
  }

  printRoundResults() {
    this.cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.dist)}`);
    });
    MissionUtils.Console.print(''); //라운드 간 개행
  }

  play() {
    MissionUtils.Console.print(messages.newLine + messages.showRoundResults);
    this.moveCars();
  }
}

export default RacingGamePlayer;
