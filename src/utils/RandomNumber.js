// utils/Random.js
import { MissionUtils } from "@woowacourse/mission-utils";

const RandomNumber = {
  pickNumberInRange(min, max) {
    return MissionUtils.Random.pickNumberInRange(min, max);
  }
};

export default RandomNumber;