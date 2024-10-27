import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import RacingGame from "./RacingGame.js";
import GameInitializer from "./GameInitializer.js";
import GameRunner from "./GameRunner.js";

class App {
  constructor(
    inputView = new InputView(),
    outputView = new OutputView(),
    game = new RacingGame()
  ) {
    this.initializer = new GameInitializer(inputView, game);
    this.runner = new GameRunner(outputView, game);
  }

  async run() {
    try {
      const tryCount = await this.initializer.initializeGame();
      await this.runner.playGame(tryCount);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
