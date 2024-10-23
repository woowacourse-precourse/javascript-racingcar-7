import { Console } from "@woowacourse/mission-utils";

export function getExecutionProcess(playersObject) {
  for (const player in playersObject) {
    Console.print(`${player}: ${playersObject[player]}`);
  }
}
