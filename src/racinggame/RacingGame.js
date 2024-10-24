import getMovePostion from './racingGameUtils.js';
import { printCarsMoving, printNewLine } from '../utils/ioModule.js';

class RacingGame {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  play() {
    for (let i = 0; i < this.tryCount; i += 1) {
      this.cars.forEach((car) => car.move());
      this.printCurrentState();
    }
  }

  printCurrentState() {
    this.cars.forEach((car) => {
      const movePosition = getMovePostion(car);
      printCarsMoving(car.getName(), movePosition);
    });
    printNewLine();
  }

  getWinner() {
    const maxMoveCount = Math.max(
      ...this.cars.map((car) => car.getMoveCount()),
    );
    const winners = this.cars.filter(
      (car) => car.getMoveCount() === maxMoveCount,
    );

    return winners.map((winner) => winner.getName());
  }
}

export default RacingGame;
