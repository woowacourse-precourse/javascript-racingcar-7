import { MissionUtils } from "@woowacourse/mission-utils";

const updateRunCount = (car) => {
  const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
  if (randomNum >= 4) {
    car.runCount += 1;
  }
}

export default updateRunCount;