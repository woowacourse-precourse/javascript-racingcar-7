import { inputCars } from "./interfaceUtils.js";

class App {
  async run() {
    const carsUserInput = await inputCars();
  }
}

export default App;
