import { MissionUtils } from '@woowacourse/mission-utils';

class MovingForward {
  static #RANGE = 4;

  #cars;

  #number;

  constructor(cars, numberOfMoves) {
    this.#cars = cars;
    this.#number = numberOfMoves;
  }

  #judgeMovement() {
    this.#cars.forEach((value, key) => {
      const random = MissionUtils.Random.pickNumberInRange(0, 9);

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
