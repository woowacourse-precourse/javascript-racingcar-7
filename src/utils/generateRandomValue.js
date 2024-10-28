import { MissionUtils } from "@woowacourse/mission-utils";

function generateRandomValue() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}
export default generateRandomValue;
