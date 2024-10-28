import { movingForward } from "./movingForward.js";
import { CAR_RACE } from "../constants/constants.js";

export function executionProcess(players, attemptsNumber) {
  const playersArray = players.split(",");
  const playersObject = new Object();

  playersArray.forEach((player) => {
    playersObject[`${player}`] = "";
  });

  for (let i = 0; i < attemptsNumber; i++) {
    movingForward(playersObject);
    CAR_RACE.NEW_LINE;
  }

  return playersObject;
}
