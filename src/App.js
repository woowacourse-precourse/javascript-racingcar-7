import { InputManager } from "./InputManager.js";
import { Race } from "./Race.js";
class App {
  async run() {
    try {
      const carNames = await InputManager.readCarNames();
      const tries = await InputManager.readTries();

      const race = new Race(carNames);
      await race.run(tries);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
