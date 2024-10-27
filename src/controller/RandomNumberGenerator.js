import { Random } from "@woowacourse/mission-utils";

class RandomNumberGenerator {
  static moveForward() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }
}

export default RandomNumberGenerator;