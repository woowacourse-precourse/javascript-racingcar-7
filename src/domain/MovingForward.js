import { MissionUtils } from '@woowacourse/mission-utils';

class MovingForward {
  static #RANDOM_RANGE = { start: 0, end: 9 };

  static #RANGE = 4;

  #cars;

  #number;

  constructor(cars, numberOfMoves) {
    this.#cars = cars;
    this.#number = numberOfMoves;
  }

  #judgeMovement() {
    const { start, end } = MovingForward.#RANDOM_RANGE;

    this.#cars.forEach((value, key) => {
      const random = MissionUtils.Random.pickNumberInRange(start, end);

      if (random >= MovingForward.#RANGE) {
        this.#cars.set(key, value + 1);
      }
    });
  }

  moveForwardCars() {
    for (let index = 0; index < this.#number; index += 1) {
      this.#judgeMovement();
    }

    return this.#cars;
  }
}

export default MovingForward;
