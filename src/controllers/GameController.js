import Validator from '../utils/validator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async run() {
    try {
      const carNames = await this.inputView.readCarNames();
      const gameCount = await this.inputView.readRacingCount();

      Validator.validateCarNames(carNames);
      Validator.validateGameCount(gameCount);

      this.outputView.printResult(carNames);
      this.outputView.printResult(gameCount);
    } catch (error) {
      throw error;
    }
  }
}

export default GameController;
