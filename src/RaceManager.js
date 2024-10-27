import { MissionUtils } from "@woowacourse/mission-utils";
import { CONDITIONS } from "./constants/conditon.js";
import { OUTPUT_MESSAGES } from "./constants/gameMessage.js";
class RaceManager {
  constructor(name) {
    this.name = name;
    this.position = CONDITIONS.INITIAL_POSITION;
  }

  createRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(
      CONDITIONS.MIN_RANDOM_NUM,
      CONDITIONS.MAX_RANDOM_NUM
    );
  }

  canMoveForward(randomNumber) {
    return randomNumber >= CONDITIONS.MIN_NUM_TO_MOVE;
  }

  move(randomNumber) {
    if (this.canMoveForward(randomNumber)) {
      this.position++;
    }
  }

  printRacingState() {
    return OUTPUT_MESSAGES.ADVANCE.repeat(this.position);
  }
}

export default RaceManager;
