import { Random } from "@woowacourse/mission-utils";

class RandomNumberGenerator {
  static #DEFAULT_START_NUMBER = 0;
  static #DEFAULT_END_NUMBER = 9;

  static create(
    start = this.#DEFAULT_START_NUMBER,
    end = this.#DEFAULT_END_NUMBER
  ) {
    return Random.pickNumberInRange(start, end);
  }
}

export default RandomNumberGenerator;
