import input from "./input.js";
import processCarMovements from "./processCarMovements.js";
import calculateWinner from "./calculateWinner.js";

class App {
  async run() {
    const { cars, raceNum } = await input();

    const carMovements = await processCarMovements(cars, raceNum);

    calculateWinner(cars, carMovements);
  }
}

export default App;
