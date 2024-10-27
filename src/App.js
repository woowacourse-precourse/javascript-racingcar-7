import CarRacingManager from './CarRacingManager.js';
import InputHandler from './InputHandler.js';
import OutputHandler from './OutputHandler.js';
import CarRacingGame from './CarRacingGame.js';

class App {
  async run() {
    const inputHandler = new InputHandler();
    const outputHandler = new OutputHandler();
    const carRacingGame = new CarRacingGame();
    const carRacingManager = new CarRacingManager(inputHandler, carRacingGame, outputHandler);

    await carRacingManager.startGame();
  }
}

export default App;
