import { MissionUtils } from "@woowacourse/mission-utils";
import { RESULT_MESSAGE, WINNER_MESSAGE } from "./constants.js";

export function displayCurrentProgress(raceResults) {
    Object.entries(raceResults).forEach(([name, progress]) => {
      MissionUtils.Console.print(`${name} : ${progress}`);
    });
    MissionUtils.Console.print(""); 
}

export function displayWinners(raceResults) {
    const MAX_DISTANCE = Math.max(...Object.values(raceResults).map(result => result.length));
    const WINNERS = Object.keys(raceResults).filter(name => raceResults[name].length === MAX_DISTANCE);
    MissionUtils.Console.print(`${WINNER_MESSAGE} : ${WINNERS.join(", ")}`);
  }