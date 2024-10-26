import input from "./input.js";
import processCarMovements from "./processCarMovements.js";

class App {
  async run() {
    const { cars, raceNum } = await input();

    processCarMovements(cars, raceNum);
  }
}

export default App;
