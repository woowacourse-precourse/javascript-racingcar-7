import { Console } from "@woowacourse/mission-utils";
import { CAR_RACE, GAP } from "../constants/constants.js";

export function runResult(playersObject) {
  let maxMove = 0;
  let winners = [];

  for (const [player, moves] of Object.entries(playersObject)) {
    const moveCount = moves.length;

    if (moveCount > maxMove) {
      maxMove = moveCount;
      winners = [player];
    }
    if (!winners.includes(player) && moveCount === maxMove)
      winners.push(`${GAP}${player}`);
  }

  Console.print(`${CAR_RACE.FINAL_WINNER}${winners.join(",")}`);
}
