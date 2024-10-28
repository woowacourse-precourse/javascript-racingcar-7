import RacingGame from '../models/racingGame.js';
import Validator from '../utils/validator.js';
import InputView from '../views/inputView.js';
import OutputView from '../views/outputView.js';

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
    OutputView.printGameStart();

    while (!this.racingGame.isGameFinished()) {
      this.playOneRound();
    }

    this.announceWinners();
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

  playOneRound() {
    this.racingGame.playOneRound();
    this.printRoundStatus();
  }

  printRoundStatus() {
    const cars = this.racingGame.getCars();
    OutputView.printRoundStatus(cars);
  }

  findWinners() {
    return this.racingGame.findWinners();
  }

  announceWinners() {
    const winners = this.findWinners();
    OutputView.printWinners(winners);
  }
}

export default GameController;
