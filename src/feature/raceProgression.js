import { Console } from "@woowacourse/mission-utils";
import goStopResult from "./goStopResult.js";

function raceProgression(carList, initialRaceHistory, trialCount) {
  const RACE_PROGRESS = initialRaceHistory;

  for (let count = 0; count < trialCount; count++) {
    let singleRace = '';

    if (count !== 0) {
      singleRace = `\n`;
    }

    carList.forEach((car) => {
      const GO_STOP = goStopResult();
      const PROGRESS_RESULT = `${RACE_PROGRESS.get(car)}${GO_STOP}`;

      RACE_PROGRESS.set(car, PROGRESS_RESULT);
      singleRace = `${singleRace}
      ${car} : ${PROGRESS_RESULT}`;
    });

    Console.print(singleRace);
  };

  return RACE_PROGRESS;
};

export default raceProgression;