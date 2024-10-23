import { movingForward } from "./movingForward.js";
import { Console } from "@woowacourse/mission-utils";
import { CAR_RACE } from "../constants/constants.js";

export function executionProcess(players, attemptsNumber) {
  const playersArray = players.split(",");
  const playersObject = new Object();
  playersArray.forEach((item) => {
    playersObject[item] = "";
  });
  for (let i = 0; i < attemptsNumber; i++) {
    movingForward(playersObject);
    Console.print(CAR_RACE.NEW_LINE);
  }
}
