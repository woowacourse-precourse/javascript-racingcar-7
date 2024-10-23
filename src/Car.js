import { Random } from '@woowacourse/mission-utils';

class Car {
  #name;

  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  #move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.#distance += 1;
    }
  }

  driving() {
    this.#move();

    const name = this.#name;
    const currentDistance = this.#distance;
    return { name, distance: currentDistance };
  }

  static findFarthest(distanceA, distanceB) {
    return distanceB - distanceA;
  }
}

export default Car;
