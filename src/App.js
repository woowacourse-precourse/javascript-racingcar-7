import Car from "./Car.js";
import { inputNames, splitName } from "./InputValue.js";

class App {
  async run() {
    const inputs = await inputNames();
    const carNames = splitName(inputs);

    const carList = carNames.map(name => new Car(name));

  }
}

export default App;

