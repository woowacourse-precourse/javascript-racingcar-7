import printWinner from "./Components/Output/printWinner.js";
import raceCar from "./Components/RaceCar/raceCar.js";
import Input from "./Input/Input.js";

class App {
  async run() {
    try {
      const carList = await Input.CarList();
      const tryNumber = await Input.TryNum();
      const winnerCars = raceCar(carList, tryNumber);
      printWinner(winnerCars);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
