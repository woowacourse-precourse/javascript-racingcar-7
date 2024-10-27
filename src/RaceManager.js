import { MissionUtils } from "@woowacourse/mission-utils";

class RaceManager {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  createRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  canMoveForward(randomNumber) {
    return randomNumber >= 4;
  }
}

export default RaceManager;
