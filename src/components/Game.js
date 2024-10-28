import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { OutputView } from '../resources/Constants.js';
import Rules from '../resources/Rules.js';
import Output from '../utils/io/Output.js';
import CarAllocator from './CarAllocator.js';
import RoundManager from './RoundManager.js';

class Game {
  #CARS_LIST = [];

  constructor(names, repetitionNumber) {
    this.nameList = CarAllocator.parseNames(names);
    this.#CARS_LIST = CarAllocator.allocateCars(this.nameList);
    this.repetitionNumber = repetitionNumber;
    this.roundManager = new RoundManager();
  }

  play() {
    Output.print(OutputView.RESULT_PRINT_BEGINNING);
    let currentRepeat = 0;
    while (currentRepeat !== this.repetitionNumber) {
      this.roundManager.startRound(this.#CARS_LIST);
      Output.printRoundResults(
        this.roundManager.getCarsStatuses(this.#CARS_LIST),
      );
      currentRepeat += 1;
    }

    const winners = this.roundManager.getWinners(this.#CARS_LIST);
    return winners;
  }
}

export default Game;
