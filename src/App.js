import { getGameInput, printGameResult } from './utils/ioHandler.js';
import { Game } from './Game.js';
import { Record } from './Record.js';

class App {
  async run() {
    const { carString, count } = await getGameInput();
    const record = new Record(carString);
    const game = new Game(record, count);
    game.play();
    printGameResult(game.getWinner());
  }
}

export default App;
