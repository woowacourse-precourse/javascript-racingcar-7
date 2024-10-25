import Game from './controller/Game.js';
import Race from './model/RaceModel.js';
import User from './user/User.js';
import outputView from './view/outputView.js';

class App {
  constructor() {
    const user = new User();
    const race = new Race();
    this.game = new Game(user, outputView, race);
  }
  async run() {
    await this.game.process();
  }
}

export default App;
