import CarRaceController from "./Controller/CarRaceController.js";
import ConsoleView from "./View/ConsoleView.js";

class App {
  async run() {
    try {
      const game = new CarRaceController();
      await game.startRace();
    } catch (error) {
      ConsoleView.printError(error.message);
      throw error;
    }
  }
}

export default App;
