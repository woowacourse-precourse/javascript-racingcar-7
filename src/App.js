import { Console, Random } from "@woowacourse/mission-utils";
import { InputHandlers } from "./InputHandlers.js";

class App {
  async run() {
    const playerNames = await InputHandlers.getPlayerNames();
    const trials = await InputHandlers.getTrials();
    const players = this.racingGame(playerNames, trials);
    this.getWinners(players);
  }

  racingGame(playerNames, trials) {
    const players = playerNames.map((name) => ({ name, position: 0 }));

    Console.print("\n실행 결과");
    for (var i = 0; i < trials; i++) {
      players.forEach((player) => {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          player.position += 1;
        }
        Console.print(`${player.name} : ${"-".repeat(player.position)}`);
      });
      Console.print("");
    }
    return players;
  }

  getWinners(players) {
    const maxPosition = Math.max(...players.map((player) => player.position));
    const winners = players
      .filter((player) => player.position === maxPosition)
      .map((player) => player.name);

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
