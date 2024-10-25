import { Console } from '@woowacourse/mission-utils';
import { getGameInput, printGameResult } from './utils/ioHandler.js';
import { ValidationError } from './Error/ValidationError.js';
import { Record } from './Record.js';
import { Game } from './Game.js';

class App {
  async run() {
    try {
      const { carString, count } = await getGameInput();
      const record = new Record(carString);
      const game = new Game(record, count);
      game.play();
      printGameResult(game.getWinner());
    } catch (error) {
      if (error instanceof ValidationError) {
        throw error;
      }
    }
  }
}

export default App;
