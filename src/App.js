import { inputCars } from "./interfaceUtils.js";
import { isCarNamesValid } from "./validationUtils.js";

class App {
  async run() {
    const carsUserInput = await inputCars();
    const cars = carsUserInput.split(",");

    if (!isCarNamesValid(cars)) throw new Error("[ERROR]");
  }
}

export default App;
