import inputCarList from "./Components/Input/inputCarList.js";
import inputTryNum from "./Components/Input/inputTryNum.js";
import raceCar from "./Components/RaceCar/raceCar.js";

class App {
  async run() {
    try {
      const carList = await inputCarList();
      const tryNumber = await inputTryNum();
      const result = raceCar(carList, tryNumber);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
