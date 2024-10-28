import { MissionUtils } from "@woowacourse/mission-utils";
import { STANDARD_VALUE } from "../constants/Constants.js";

export default class RaceController {
  static async startRace(carNames, attemptCount) {
    const results = {};
    carNames.forEach((carName) => {
      results[carName] = this.isMovingForward();
    });
  }

  static isMovingForward() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (STANDARD_VALUE >= randomNumber) {
      return true;
    }
    return false;
  }
}
