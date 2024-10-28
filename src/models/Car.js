import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  // 0부터 9까지의 무작위 수를 뽑아 4 이상일 시 전진
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

export default Car;
