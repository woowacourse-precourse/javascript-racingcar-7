import { MissionUtils } from "@woowacourse/mission-utils";
import { STANDARD_VALUE } from "../constants/Constants.js";

export default class RaceController {
  static async startRace(carNames, attemptCount) {
    const results = {};
    carNames.forEach((carName) => {
      results[carName] = this.getForwardCount(attemptCount);
    });
  }

  static getForwardCount(attemptCount) {
    let forwardCount = 0;

    for (let i = 0; i < attemptCount; i++) {
      if (this.isMovingForward()) {
        forwardCount++;
      }
    }

    return forwardCount;
  }

  static isMovingForward() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= STANDARD_VALUE;
  }
}
