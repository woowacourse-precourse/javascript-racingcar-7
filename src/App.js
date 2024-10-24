import Car from "./Car.js";
import { inputNames } from "./InputValue.js";

class App {
  async run() {
    const carNames = await inputNames();
    const cars = carNames.map(name => new Car(name));
  }
}

export default App;
