import { RaceController } from "./controller/RaceController.js";

class App {
  async run() {
    const controller = new RaceController();
    await controller.run();
  }
}

export default App;
