import { Random } from '@woowacourse/mission-utils';

const THRESHOLD_FOR_MOVING_FORWARD = 4;

class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }

  raceLap() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber >= THRESHOLD_FOR_MOVING_FORWARD) {
      this.#moveForward();
    }
  }

  #moveForward() {
    this.#distance += 1;
  }
}

export default Car;
