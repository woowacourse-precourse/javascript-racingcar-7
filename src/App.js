import { Console, Random } from "@woowacourse/mission-utils";
import { InputHandlers } from "./InputHandlers.js";
import { racingGame } from "./racingGame.js";

class App {
  async run() {
    const playerNames = await InputHandlers.getPlayerNames();
    const trials = await InputHandlers.getTrials();

    racingGame(playerNames, trials);
  }
}

export default App;
