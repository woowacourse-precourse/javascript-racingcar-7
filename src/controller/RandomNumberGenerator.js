import { Random } from "@woowacourse/mission-utils";

class RandomNumberGenerator {
  static generate() {
    return Random.pickNumberInRange(0, 9);
  }
}

export default RandomNumberGenerator;