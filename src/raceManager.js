import { MissionUtils } from "@woowacourse/mission-utils";
import { MIN_RANDOM_VALUE } from "./constants.js";
import { displayCurrentProgress } from "./raceView.js";

function shouldMoveForward() {
  const RANDOM_VALUE = MissionUtils.Random.pickNumberInRange(0, 9);
  return RANDOM_VALUE >= MIN_RANDOM_VALUE;
}

export function simulateRace(carNames, attemptCount) {
    const RACE_RESULT = carNames.reduce((acc, name) => {
      acc[name] = "";
      return acc;
    }, {});
  
    for (let i = 0; i < attemptCount; i++) {
      carNames.forEach((name) => {
        if (shouldMoveForward()) {
            RACE_RESULT[name] += "-";
        }
      });
      displayCurrentProgress(RACE_RESULT); 
    }
  
    return RACE_RESULT;
  }
  
