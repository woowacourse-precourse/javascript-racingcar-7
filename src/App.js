import { getValidatedCarNames } from "./inputHandler.js";

class App {
  async run() {
    const CARS = await getValidatedCarNames();
    console.log(CARS);
  }
}

export default App;
