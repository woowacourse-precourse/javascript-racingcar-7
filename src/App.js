import Car from "./Car.js";
import { inputNames, splitName, inputNameValidation, inputTryCount } from "./InputValue.js";
import { raceStart } from "./Move.js";

class App {
  async run() {
    const inputs = await inputNames();
    const carNames = splitName(inputs);

    carNames.forEach(name => inputNameValidation(name));

    const carList = carNames.map(name => new Car(name));
    const inputCount = await inputTryCount();

    for (let round = 0; round < inputCount; round++){
      raceStart(carList);
    }
  }
}

export default App;

