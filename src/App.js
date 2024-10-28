import raceCar from "./RaceCar/raceCar.js";
import Input from "./Input/Input.js";
import Output from "./Output/Output.js";

class App {
  async run() {
    try {
      const carList = await Input.CarList();
      const tryNumber = await Input.TryNum();
      const winnerCars = raceCar(carList, tryNumber);
      Output.winner(winnerCars);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
