import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { CONSOLE_MESSAGE } from './constant.js';
import { printEmptyString } from './util.js';

class RacingGameManager {
  #cars;
  #tryCount;

  constructor(carNames, tryCount) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#tryCount = tryCount;
  }

  playGame() {
    this.#startGame();

    const winners = this.#selectWinner();
    this.#printWinner(winners);
  }

  #startGame() {
    Console.print(CONSOLE_MESSAGE.GAME_START_MESSAGE);
    for (let i = 0; i < this.#tryCount; i++) {
      this.#printTryResult();
      printEmptyString();
    }
  }

  #printTryResult() {
    this.#cars.forEach((car) => {
      car.move();
      car.printCarPosition();
    });
  }

  #selectWinner() {
    const maxCarPosition = Math.max(
      ...this.#cars.map((car) => car.getPosition()),
    );

    const maxCars = this.#cars.filter(
      (car) => car.getPosition() === maxCarPosition,
    );

    return maxCars;
  }

  #printWinner(winners) {
    const winnerNames = winners.map((winner) => winner.getName());

    Console.print(
      CONSOLE_MESSAGE.ANNOUNCE_WINNER_MESSAGE + winnerNames.join(', '),
    );
  }
}

export default RacingGameManager;
