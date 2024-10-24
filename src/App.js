import RaceManager from "./race/RaceManager.js";

class App {
  async run() {
    const raceManager = new RaceManager();
    raceManager.racing();
  }
}

export default App;
