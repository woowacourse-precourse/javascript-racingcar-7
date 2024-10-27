import InputManager from './InputManager.js';
import Game from './Game.js';

class App {
  async run() {
    const carNames = await this.getCarNames();
    const attempts = await this.getAttempts();
    this.playGame(carNames, attempts);
  }

  async getCarNames() {
    return InputManager.getCarNames();
  }

  async getAttempts() {
    return InputManager.getAttempts();
  }

  playGame(carNames, attempts) {
    const game = new Game(carNames, attempts);
    game.play();
  }
}

export default App;
