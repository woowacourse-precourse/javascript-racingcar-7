import { Console, Random } from "@woowacourse/mission-utils";
import { CONSTANTS, OUTPUT_MESSAGES } from "./constants.js";

export function racingGame(playerNames, trials) {
  const players = playerNames.map((name) => ({ name, position: 0 }));

  Console.print(OUTPUT_MESSAGES.RACE_RESULT);
  for (var i = 0; i < trials; i++) {
    players.forEach((player) => {
      movePlayer(player);
      Console.print(`${player.name} : ${CONSTANTS.POSITION_MARKER.repeat(player.position)}`);
    });
    Console.print("");
  }

  getWinners(players);
}

function movePlayer(player) {
  const randomValue = Random.pickNumberInRange(CONSTANTS.RANDOM_MIN, CONSTANTS.RANDOM_MAX);
  if (randomValue >= CONSTANTS.MOVE_THRESHOLD) {
    player.position += 1;
  }
}

function getWinners(players) {
  const maxPosition = Math.max(...players.map((player) => player.position));
  const winners = players
    .filter((player) => player.position === maxPosition)
    .map((player) => player.name);

  Console.print(OUTPUT_MESSAGES.FINAL_WINNER(winners));
}
