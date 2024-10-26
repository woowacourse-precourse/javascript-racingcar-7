import InputView from '../views/inputView.js';

class GameController {
  carNames;

  rounds;

  async start() {
    await this.readCarNames();
    await this.readGameRounds();
  }

  async readCarNames() {
    this.carNames = await InputView.readCarNames();
  }

  async readGameRounds() {
    this.rounds = await InputView.readGameRounds();
  }
}

export default GameController;
