import { MissionUtils } from "@woowacourse/mission-utils";
import { MOVE_CONDITION } from "../constants/constants";

function movingCondition(carPosition) {
  const random = MissionUtils.Random.pickNumberInRange;

  const moveDetermain = random(MOVE_CONDITION.minRange, MOVE_CONDITION.maxRange);
  if (moveDetermain >= MOVE_CONDITION.condition) {
    carPosition += MOVE_CONDITION.move;
  }

  return carPosition;
}

export default movingCondition;