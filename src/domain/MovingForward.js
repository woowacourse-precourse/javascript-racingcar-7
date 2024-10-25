import { MissionUtils } from '@woowacourse/mission-utils';

class MovingForward {
  static #RANDOM_RANGE = { start: 0, end: 9 };

  static #SEPARATOR = '\n';

  static #RANGE = 4;

  #cars;

  #number;

  #progress = [];

  constructor(cars, numberOfGame) {
    this.#cars = cars;
    this.#number = numberOfGame;
    this.#moveForwardCars();
  }

  #judgeMovement() {
    const { start, end } = MovingForward.#RANDOM_RANGE;

    this.#cars.forEach((numberOfMoves, carName) => {
      const random = MissionUtils.Random.pickNumberInRange(start, end);

      if (random >= MovingForward.#RANGE) {
        this.#cars.set(carName, numberOfMoves + 1);
      }
    });
  }

  #recordMovement() {
    let record = '';
    const separator = MovingForward.#SEPARATOR;

    this.#cars.forEach((numberOfMoves, carName) => {
      record += `${separator}${carName} : ${'-'.repeat(numberOfMoves)}`;
    });

    this.#progress.push(record);
  }

  #moveForwardCars() {
    for (let index = 0; index < this.#number; index += 1) {
      this.#judgeMovement();
      this.#recordMovement();
    }
  }

  getMoveResults() {
    const separator = MovingForward.#SEPARATOR;

    return { cars: this.#cars, progress: this.#progress.join(separator) };
  }
}

export default MovingForward;
