import Car from "./Car.js";
import { inputNames, splitName, inputNameValidation } from "./InputValue.js";

class App {
  async run() {
    const inputs = await inputNames();
    const carNames = splitName(inputs);

    carNames.forEach(name => inputNameValidation(name));

    const carList = carNames.map(name => new Car(name));

  }
}

export default App;

