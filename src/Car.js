import { Random } from "@woowacourse/mission-utils";
import { NUMBER } from "./Constants/constants.js";

class Car {
  #position;
  #name;

  constructor(name) {
    this.#name = name;
    this.#position = "";
  }

  async getRandomNumber() {
    return Random.pickNumberInRange(NUMBER.RANDOM_MIN, NUMBER.RANDOM_MAX);
  }

  async getAttemptResult() {
    let positionDash = `${this.#name} : ${this.#position}`;

    return positionDash;
  }

  async progress() {
    this.#position += "-";
  }
}

export default Car;
