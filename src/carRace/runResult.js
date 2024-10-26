import { Console } from "@woowacourse/mission-utils";
import { CAR_RACE, GAP } from "../constants/constants.js";

export function runResult(playersObject) {
  let arr = [];

  for (const player in playersObject) {
    arr.push([player, playersObject[player]]);
  }

  const sortArray = arr.sort(function (a, b) {
    return b[1].length - a[1].length;
  });

  let winners = [sortArray[0][0]];

  for (let i = 1; i < sortArray.length; i++) {
    const moveResult = sortArray[0][1];
    const nextNMoveResult = sortArray[i][1];
    const name = sortArray[i][0];
    if (moveResult === nextNMoveResult) winners.push(`${GAP}${name}`);
  }

  Console.print(`${CAR_RACE.FINAL_WINNER}${winners}`);
}
