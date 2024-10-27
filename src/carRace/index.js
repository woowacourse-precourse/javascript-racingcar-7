import { rankPlayersByMoveCount } from "./rankPlayersByMoveCount.js";
import { executionProcess } from "./executionProcess.js";

export function startCarRace(inputCarName, inputAttemptsNumber) {
  const playersObject = executionProcess(inputCarName, inputAttemptsNumber);
  const runResult = rankPlayersByMoveCount(playersObject);

  return runResult;
}
