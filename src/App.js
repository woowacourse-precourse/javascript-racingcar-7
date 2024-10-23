import CarController from "./controller/carController.js";

class App {
  async run() {
    await new CarController().raceStart();
  }

}

export default App;
