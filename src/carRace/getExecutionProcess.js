import { Console } from "@woowacourse/mission-utils";
import { CAR_RACE } from "../constants/constants.js";

export function getExecutionProcess(playersObject) {
  for (const player in playersObject) {
    Console.print(`${player}${CAR_RACE.COLON}${playersObject[player]}`);
  }
}
