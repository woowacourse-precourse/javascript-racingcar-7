import Game from './controller/Game.js';
import Race from './model/Race.js';
import User from './user/User.js';
import outputView from './view/outputView.js';

class App {
  constructor() {
    const user = new User();
    this.game = new Game(user, outputView, Race);
  }
  async run() {
    await this.game.process();
  }
}

export default App;
