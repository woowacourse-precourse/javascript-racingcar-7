import Game from './controller/game.js';

class App {
  constructor() {
    this.game = new Game();
  }

  async run() {
    this.game.process();
  }
}

export default App;
