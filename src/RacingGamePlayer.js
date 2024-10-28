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

  findMaxMovingDistance() {
    return Math.max(...this.cars.map((car) => car.dist));
  }

  findWinner() {
    const maxMovingDistance = this.findMaxMovingDistance();
    return this.cars
      .filter((car) => car.dist == maxMovingDistance)
      .map((car) => car.name);
  }

  play() {
    MissionUtils.Console.print(messages.newLine + messages.showRoundResults);
    this.moveCars();
    this.winner = this.findWinner();
    MissionUtils.Console.print(
      `${messages.announceWinner}${this.winner.join(', ')}`
    );
  }
}

export default RacingGamePlayer;
