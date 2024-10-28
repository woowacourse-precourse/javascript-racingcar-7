import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { OutputView } from '../resources/Constants.js';
import Rules from '../resources/Rules.js';
import Output from '../utils/io/Output.js';
import CarAllocator from './CarAllocator.js';

class Game {
  #CARS_LIST = [];

  constructor(names, repetitionNumber) {
    this.nameList = CarAllocator.parseNames(names);
    this.#CARS_LIST = CarAllocator.allocateCars(this.nameList);
    this.repetitionNumber = repetitionNumber;
  }

  play() {
    Output.print(OutputView.RESULT_PRINT_BEGINNING);
    let currentRepeat = 0;
    while (currentRepeat !== this.repetitionNumber) {
      this.startRound();
      Output.printRoundResults(this.getCarsStatuses());
      currentRepeat += 1;
    }

    const winners = this.getWinners();
    return winners;
  }

  startRound() {
    this.#CARS_LIST.forEach((car) => {
      if (!this.canMoveForward()) return;
      car.moveForward();
    });
  }

  getCarsStatuses() {
    return this.#CARS_LIST.map((car) => car.getStatus());
  }

  canMoveForward() {
    if (
      Random.pickNumberInRange(Rules.MIN_NUMBER, Rules.MAX_NUMBER) >=
      Rules.THRESHOLD_NUMBER
    )
      return true;
    return false;
  }

  getWinners() {
    const maxDistance = Math.max(
      ...this.#CARS_LIST.map((car) => car.currentDistance),
    );
    return this.#CARS_LIST
      .filter((car) => car.currentDistance === maxDistance)
      .map((car) => car.name);
  }
}

export default Game;
