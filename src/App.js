import RacingCarController from "./controllers/RacingCarController.js";

RacingCarController

class App {
  async run() {
    await new RacingCarController().racingCarProcess();
  }
}

export default App;
