import { MissionUtils } from "@woowacourse/mission-utils";
import { MIN_RANDOM_VALUE, RESULT_MESSAGE } from "./constants.js";

function displayCurrentProgress(raceResults) {
    Object.entries(raceResults).forEach(([name, progress]) => {
      console.log(`${name} : ${progress}`);
    });
    console.log(""); 
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
  
  function shouldMoveForward() {
    const RANDOM_VALUE = MissionUtils.Random.pickNumberInRange(0, 9);
    return RANDOM_VALUE >= MIN_RANDOM_VALUE;
  }
  
  export function displayWinners(raceResults) {
    const MAX_DISTANCE = Math.max(...Object.values(raceResults).map(result => result.length));
    const WINNERS = Object.keys(raceResults).filter(name => raceResults[name].length === MAX_DISTANCE);
    console.log(`${RESULT_MESSAGE} : ${WINNERS.join(", ")}`);
  }