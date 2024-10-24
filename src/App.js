import { getGameInput, printGameResult } from './utils/ioHandler.js';
import { Game } from './Game.js';

class App {
  async run() {
    const { carString, count } = await getGameInput();
    const game = new Game(carString, count);
    const gameResult = game.play();
    printGameResult(gameResult);
  }
}

export default App;
