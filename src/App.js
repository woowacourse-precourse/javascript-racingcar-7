import RaceGameController from './controller/RaceGameController.js';
import RaceGameService from './service/RaceGameService.js';
import RaceGameView from './view/RaceGameView.js';
import io from './utils/io.js';

class App {
  controller;
  constructor () {
    this.controller = new RaceGameController(
      new RaceGameView(io),
      new RaceGameService(),
    );
  }

  async run () {
    await this.controller.run();
  }
}

export default App;
