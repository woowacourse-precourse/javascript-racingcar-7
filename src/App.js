import RacingController from "./controller/RacingController.js";

class App {
  async run() {
    try {
      const racingController = new RacingController();
      await racingController.run();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
