import { GAP } from "../constants/constants.js";

export function rankPlayersByMoveCount(playersObject) {
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

  return winners.join(",");
}
