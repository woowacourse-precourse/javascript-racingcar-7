import { Console } from '@woowacourse/mission-utils'

import Input from './Input.js'
import Game from './Game.js'
import Winner from './Winner.js'

class App {
  constructor () {
    this.input = new Input();
    this.winner = new Winner();
  }

  async run() {
    try {
      const cars = await this.input.getCarNames();
      const rounds = await this.input.getRounds();

      const game = new Game(cars, rounds);
      const gameResult = game.start();

      this.winner.announce(gameResult);
    } catch(e) {
      Console.print(e.message);
      throw e;
    }
  }
}

export default App;
