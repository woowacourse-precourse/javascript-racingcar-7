import Input from './input.js';
import Game from './game.js';
import Result from './result.js';
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = new Input();
      const game = new Game();
      const result = new Result();

      const carList = await input.getCarNames();
      const gameRound = await input.getGameRound();

      const gameRounds = await game.runRacingGame(carList, gameRound);
      result.printWinner(carList, gameRounds);
    } catch (error) {
      Console.print(`${error.message}`);
      throw error;
    }
  }
}

export default App;