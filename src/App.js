import Game from "./Game.js";
import InputHandler from "./InputHandler.js";
import ErrorHandler from "./ErrorHandler.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputHandler = new InputHandler();

    try {
      const carNamesInput = await inputHandler.getCarNames();
      const attemptCountInput = await inputHandler.getAttemptCount();

      const carNames = ErrorHandler.validateCarNames(carNamesInput);
      const attemptCount = ErrorHandler.validateAttemptCount(attemptCountInput);

      const game = new Game(carNames, attemptCount);
      await game.start();
    } catch (error) {
      Console.print(` ${error.message}`);
      throw error;
    }
  }
}

export default App;
