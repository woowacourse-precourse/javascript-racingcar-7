import { getAttempts, getCarNames } from "./inputHandlers.js";
class App {
  async run() {
    const cars = await getCarNames();
    const attemps = await getAttempts();
  }
}

export default App;
