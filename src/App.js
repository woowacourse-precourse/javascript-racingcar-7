import { askCarName, askTryTime } from "./utils/inputHandler.js";
import Car from "./models/Car.js"

class App {
  async run() {
    try {
      const carName = await askCarName();
      const carList = Car.makeCarList(carName);
      const tryTime = await askTryTime();
      Car.race(carList, tryTime);
      Car.whoIsWinner(carList);

    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }
}

export default App;
