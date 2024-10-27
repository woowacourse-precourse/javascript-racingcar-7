import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Game from './Game.js';

class App {
  async run() {
    try {
      const carNames = await InputView.getCarNames();
      const rounds = await InputView.getRounds();

      const game = new Game(carNames);
      game.start(rounds);

      OutputView.printWinners(game.getWinners());
    } catch (error) {
      OutputView.printError(error.message);
      throw new Error(error.message);
    }
  }
}

export default App;
