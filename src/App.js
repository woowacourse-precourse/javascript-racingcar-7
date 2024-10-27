import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import RacingGame from "./models/RacingGame.js";
import GameInitializer from "./controllers/GameInitializer.js";
import GameRunner from "./controllers/GameRunner.js";

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
