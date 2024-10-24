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
}

export default GameController;
