import { getCarName, getRound } from "./handleInput.js";
import { startRacing } from "./gameController.js";

class App {
  async run() {
    const carNames = await getCarName();
    const round = await getRound();
    const carCount = carNames.length;

    let carDistances = Array(carCount).fill(0);
    carDistances = startRacing(round, carDistances, carCount);
  }
}

export default App;
