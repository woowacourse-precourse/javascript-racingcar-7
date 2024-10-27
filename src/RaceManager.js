import { MissionUtils } from "@woowacourse/mission-utils";

class RaceManager {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
  createRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}

export default RaceManager;
