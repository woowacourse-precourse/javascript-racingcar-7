import RacingGameManager from './RacingGameManager.js';
import UserInputHandler from './UserInputHandler.js';

class App {
  async run() {
    const inputHandler = new UserInputHandler();
    const carNames = await inputHandler.getCarNames();
    const tryCount = await inputHandler.getTryCount();

    const game = new RacingGameManager(carNames, tryCount);
    await game.playGame();
  }
}

export default App;
