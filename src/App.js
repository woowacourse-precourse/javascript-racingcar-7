import InputView from "./InputView.js";
import RacingGame from "./RacingGame.js";
import OutputView from "./OutputView.js";

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.game = new RacingGame();
  }

  async run() {
    const game = this.game;

    try {
      await this.initializeGame(game);
      await this.playGame(game);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async initializeGame(game) {
    const namesInput = await this.inputView.inputCarNames();
    this.game.createCars(namesInput);

    const countInput = await this.inputView.inputTryCount();
    this.tryCount = game.validateTryCount(countInput);
  }

  async playGame(game) {
    this.outputView.printGameStartMessage();

    for (let i = 0; i < this.tryCount; i++) {
      game.moveAllCars();
      game.printAllStatus();
    }

    game.printWinners();
  }
}

export default App;
