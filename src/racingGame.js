import { Console, Random } from "@woowacourse/mission-utils";

export function racingGame(playerNames, trials) {
  const players = playerNames.map((name) => ({ name, position: 0 }));

  Console.print("\n실행 결과");
  for (var i = 0; i < trials; i++) {
    players.forEach((player) => {
      movePlayer(player);
      Console.print(`${player.name} : ${"-".repeat(player.position)}`);
    });
    Console.print("");
  }
  return players;
}

function movePlayer(player) {
  if (Random.pickNumberInRange(0, 9) >= 4) {
    player.position += 1;
  }
}
