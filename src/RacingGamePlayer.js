import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';
import messages from './printMessages.js';

class RacingGamePlayer {
  constructor(carNames, tryNumber) {
    this.cars = this.createCars(carNames);
    this.roundNumber = tryNumber;
    this.winner = [];
  }

  createCars(carNames) {
    return carNames.map((carName) => new Car(carName));
  }

  moveCars() {
    MissionUtils.Console.print(messages.newLine + messages.showRoundResults);
    for (let i = 0; i < this.roundNumber; i++) {
      this.cars.forEach((car) => car.move());
      this.printRoundResults();
    }
  }

  printRoundResults() {
    this.cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.distance)}`);
    });
    MissionUtils.Console.print(''); //라운드 간 개행
  }

  findMaxMovingDistance() {
    return Math.max(...this.cars.map((car) => car.distance));
  }

  findWinner() {
    const maxMovingDistance = this.findMaxMovingDistance();
    return this.cars
      .filter((car) => car.distance == maxMovingDistance)
      .map((car) => car.name);
  }

  announceWinner() {
    MissionUtils.Console.print(
      `${messages.announceWinner}${this.winner.join(', ')}`
    );
  }

  play() {
    this.moveCars();
    this.winner = this.findWinner();
    this.announceWinner();
  }
}

export default RacingGamePlayer;
