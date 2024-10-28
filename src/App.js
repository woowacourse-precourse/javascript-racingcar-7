import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import Game from "./domain/Game.js";

class App {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async run() {
    const game = await this.#initializeGame();
    await this.#playGame(game);
    this.#announceWinners(game);
  }

  async #initializeGame() {
    const carNames = await this.#inputView.readCarNames();
    const attempts = await this.#inputView.readAttempts();
    return new Game(carNames, attempts);
  }

  async #playGame(game) {
    this.#outputView.printGameStart();

    for (let i = 0; i < game.getAttempts(); i++) {
      await game.play();
      this.#outputView.printRoundResult(game.getCurrentPositions());
    }
  }

  #announceWinners(game) {
    this.#outputView.printWinners(game.getWinners());
  }
}

export default App;
