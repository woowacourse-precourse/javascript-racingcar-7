import Validator from '../utils/validator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Game from '../models/Game.js';

class GameController {
  #inputView;
  #outputView;
  #game;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async run() {
    try {
      await this.#initializeGame();
      this.#playGame();
      this.#announceWinners();
    } catch (error) {
      throw error;
    }
  }

  async #initializeGame() {
    const carNames = await this.#getValidCarNames();
    const gameCount = await this.#getValidGameCount();
    this.#game = new Game(carNames, gameCount);
  }

  async #getValidCarNames() {
    const input = await this.#inputView.readCarNames();
    Validator.validateCarNames(input);
    return input.split(',').map((name) => name.trim());
  }

  async #getValidGameCount() {
    const count = await this.#inputView.readRacingCount();
    Validator.validateGameCount(count);
    return Number(count);
  }

  #playGame() {
    this.#outputView.printGameStart();
    this.#game.play((cars) => {
      this.#outputView.printRaceProgress(cars);
    });
  }

  #announceWinners() {
    const winners = this.#game.getWinners();
    this.#outputView.printWinners(winners);
  }
}

export default GameController;
