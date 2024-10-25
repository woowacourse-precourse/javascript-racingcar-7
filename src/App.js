import RaceController from "./controller/RaceController.js";
class App {
  async run() {
    await new RaceController().start();
  }
}

export default App;
