import InputView from "./InputView.js";
import RacingGame from "./RacingGame.js";
import OutputView from "./OutputView.js";

class App {
  constructor(
    inputView = new InputView(),
    outputView = new OutputView(),
    game = new RacingGame()
  ) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.game = game;
  }

  async run() {
    try {
      await this.initializeGame();
      await this.playGame();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async initializeGame() {
    const namesInput = await this.inputView.inputCarNames();
    this.game.createCars(namesInput);

    const countInput = await this.inputView.inputTryCount();
    this.tryCount = this.game.validateTryCount(countInput);
  }

  async playGame() {
    this.outputView.printGameStartMessage();

    for (let i = 0; i < this.tryCount; i++) {
      this.game.moveAllCars();
      this.game.printAllStatus();
    }

    this.game.printWinners();
  }
}

export default App;
