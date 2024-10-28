import InputController from './InputController.js';
import Race from '../models/Race.js';
import GameView from '../views/GameView.js';
import ResultView from '../views/ResultView.js';

class GameController {
  constructor() {
    this.inputController = new InputController();
    this.race = null;
  }

  async startGame() {
    try {
      const carNames = await this.inputController.getCarNames();
      const roundCount = await this.inputController.getRoundCount();
      this.race = new Race(carNames, roundCount);

      for (let round = 0; round < roundCount; round++) {
        this.race.advanceCars();
        GameView.displayRoundResult(this.race.cars);
      }

      const winners = this.race.getWinners();
      ResultView.displayWinners(winners);
    } catch (error) {
      console.error(`[ERROR] ${error.message}`);
    }
  }
}

export default GameController;
