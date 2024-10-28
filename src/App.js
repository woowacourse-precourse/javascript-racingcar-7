import { getCarNames } from "./inputHandlers.js";
class App {
  async run() {
    const cars = await getCarNames();
  }
}

export default App;
