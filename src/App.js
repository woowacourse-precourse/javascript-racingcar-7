import { startRace } from "./Race.js";

class App {
  async run() {
    await startRace();
  }
}

export default App;
