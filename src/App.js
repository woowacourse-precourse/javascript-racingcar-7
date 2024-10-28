import RaceGameController from "./controller/RaceGameController.js";
import RaceGameService from "./service/RaceGameService.js";
import RaceGameView from "./view/RaceGameView.js";
import io from './utils/io.js'

class App {
  async run() {
    const controller = new RaceGameController(new RaceGameView(io), new RaceGameService());
    await controller.run();
  }
}

export default App;
