import { CAR_RACE } from "../constants/constants.js";
import { getExecutionProcess } from "./getExecutionProcess.js";
import { generateRandomNumber } from "./generateRandomNumber.js";

export function movingForward(playersObject) {
  for (const player in playersObject) {
    const randomNumber = generateRandomNumber();

    if (randomNumber >= CAR_RACE.MOVE_THRESHOLD)
      playersObject[player] += CAR_RACE.CAR_MOVE;
    if (randomNumber < CAR_RACE.MOVE_THRESHOLD) playersObject;
  }

  return getExecutionProcess(playersObject);
}
