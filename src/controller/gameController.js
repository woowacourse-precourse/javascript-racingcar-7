import RacingGame from '../models/racingGame.js';
import Validator from '../utils/validator.js';
import InputView from '../views/inputView.js';

class GameController {
  carNames;

  gameRounds;

  racingGame;

  async start() {
    await this.readCarNames();
    this.validateCarNames();
    await this.readGameRounds();
    this.validateGameRounds();
    this.createRacingGame();
  }

  async readCarNames() {
    this.carNames = await InputView.readCarNames();
  }

  validateCarNames() {
    Validator.validateCarNames(this.carNames);
  }

  async readGameRounds() {
    this.gameRounds = await InputView.readGameRounds();
  }

  validateGameRounds() {
    Validator.validateGameRounds(this.gameRounds);
  }

  createRacingGame() {
    this.racingGame = new RacingGame(this.carNames, this.gameRounds);
  }
}

export default GameController;
