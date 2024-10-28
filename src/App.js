import { getCarsInput, getMoveCountInput } from "./handlers/IOHandler.js";
import Car from "./models/Car.js";
import Game from "./models/Game.js";

class App {
  async run() {
    try {
      const carNames = await getCarsInput();
      const moveCount = await getMoveCountInput();

      const cars = carNames.map(name => new Car(name));
      const game = new Game(cars, moveCount);

      game.run();
    } catch (err) {
      throw err;
    }
  }
}

export default App;
