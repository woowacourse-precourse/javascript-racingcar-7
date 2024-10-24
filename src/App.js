import { InputView } from "./View/InputView.js";
import Race from "./Race.js";

class App {
  async run() {
    const carNameList = await InputView.carNameList();
    const race = new Race(carNameList.split(","));
    race.progressCar();
  }
}

export default App;
