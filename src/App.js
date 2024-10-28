import { Console } from "@woowacourse/mission-utils";
import { getCarNames, getAttemptCount } from "./input/InputHandler.js";
import { playGame } from "./game/Game.js";
import { displayWinners } from "./game/Result.js";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      const attemptCount = await getAttemptCount();
      const results = playGame(carNames, attemptCount);
      displayWinners(results);
    } catch (error) {
      Console.print(error.message); 
      throw error; 
    }
  }
}

export default App;
