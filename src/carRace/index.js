import { runResult } from "./runResult.js";
import { Console } from "@woowacourse/mission-utils";
import { CAR_RACE } from "../constants/constants.js";
import { executionProcess } from "./executionProcess.js";

export function startCarRace(inputCarName, inputAttemptsNumber) {
  Console.print(CAR_RACE.RUN_RESULT);
  const playersObject = executionProcess(inputCarName, inputAttemptsNumber);
  runResult(playersObject);
}
