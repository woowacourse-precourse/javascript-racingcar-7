import Game from './controller/game.js';

class App {
  constructor() {
    this.game = new Game();
  }

  async run() {
    await this.game.process();
  }
}

export default App;
