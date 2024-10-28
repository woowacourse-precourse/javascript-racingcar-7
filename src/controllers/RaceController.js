import { MissionUtils } from "@woowacourse/mission-utils";
import { STANDARD_VALUE } from "../constants/Constants.js";

export default class RaceController {
  static async startRace(carNames, attemptCount) {
    const isMovingForward = getRandomNumber();
  }

  static getRandomNumber() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (STANDARD_VALUE >= randomNumber) {
      return true;
    }
    return false;
  }
}
