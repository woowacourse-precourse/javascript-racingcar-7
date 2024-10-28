import { inputCars } from "./inputs/inputCars.js";
import { inputMoveCount } from "./inputs/inputMoveCount.js";
import { startRace } from "./outputs/startRace.js";
import { checkWinners } from "./outputs/checkWinner.js";

class App {
  async run() {
    const cars = await inputCars();
    const moveCount = await inputMoveCount();;
    startRace(cars, moveCount);
    checkWinners(cars);
  }
}

export default App;
