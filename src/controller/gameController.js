import InputView from '../views/inputView.js';

class GameController {
  async start() {
    await InputView.readCarNames();
  }
}

export default GameController;
