// App.js
import { Race } from './utils/race.js';
import { Input } from './views/input.js';
import { Output } from './views/output.js';

class App {
  constructor() {
    this.input = new Input();
    this.output = new Output();
  }

  async run() {
    const carArr = await this.input.getCarNames();
    const trialCount = await this.input.getTrialCount();
    this.processRace(carArr, trialCount);
  }

  processRace(carArr, trialCount) {
    const race = new Race(carArr, trialCount);
    try {
      const results = race.startRace();
      this.output.displayResults(results);
      const winners = race.determineWinners();
      this.output.displayWinners(winners);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
