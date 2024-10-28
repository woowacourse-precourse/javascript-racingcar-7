import { inputCarName, inputTryTime } from "./inputHandler.js";
import Car from "./Car.js"

class App {
  async run() {
    try {
      const carName = await inputCarName();
      const carList = Car.makeCarList(carName);
      const tryTime = await inputTryTime();
      Car.race(carList, tryTime);
      Car.whoIsWinner(carList);

    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }
}

export default App;
