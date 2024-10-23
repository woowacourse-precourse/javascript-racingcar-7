import { Console } from '@woowacourse/mission-utils';
import { carInput, countInput } from './utils/input.js';
import CarRacingGame from './CarRacingGame.js';

class App {
  async run() {
    try {
      const cars = await carInput();
      const count = await countInput();
      const game = new CarRacingGame(cars, count);
      game.playGame();
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export default App;
