import { MissionUtils } from "@woowacourse/mission-utils";

export class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  moveForward() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.#distance++;
    }
    return this.getDistance();
  }

  getDistance() {
    return this.#distance;
  }

  getName() {
    return this.#name;
  }
}
