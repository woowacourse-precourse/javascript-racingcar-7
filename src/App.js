import { startRace } from "./CarRacing.js";

class App {
  async run() {
    await startRace();
  }
}

export default App;
