import { Random } from "@woowacourse/mission-utils";
import { NUMBER } from "./Constants/constants.js";

class Car {
  #position;
  #name;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  async getRandomNumber() {
    return Random.pickNumberInRange(NUMBER.RANDOM_MIN, NUMBER.RANDOM_MAX);
  }

  async progress() {
    this.#position += NUMBER.PROGRESS;
  }
}

export default Car;
