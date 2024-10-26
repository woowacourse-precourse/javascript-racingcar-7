import { movingForward } from "./movingForward.js";
import { Console } from "@woowacourse/mission-utils";
import { CAR_RACE, GAP } from "../constants/constants.js";

export function executionProcess(players, attemptsNumber) {
  const playersArray = players.split(",");
  const playersObject = new Object();
  playersArray.forEach((player) => {
    playersObject[`${player}${GAP}`] = "";
  });
  for (let i = 0; i < attemptsNumber; i++) {
    movingForward(playersObject);
    Console.print(CAR_RACE.NEW_LINE);
  }
  return playersObject;
}
