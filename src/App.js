import { Console, Random } from "@woowacourse/mission-utils";
import { InputHandlers } from "./InputHandlers.js";
import { racingGame } from "./racingGame.js";

class App {
  async run() {
    const playerNames = await InputHandlers.getPlayerNames();
    const trials = await InputHandlers.getTrials();
    const players = racingGame(playerNames, trials);
    this.getWinners(players);
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
