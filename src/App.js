import InputManager from './InputManager.js';
import playGame from './playGame.js';

class App {
  async run() {
    const carNames = await this.getCarNames();
    const attempts = await this.getAttempts();
    playGame(carNames, attempts);
  }

  async getCarNames() {
    return InputManager.getCarNames();
  }

  async getAttempts() {
    return InputManager.getAttempts();
  }
}

export default App;
