import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      this.#position++;
    }
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }
}