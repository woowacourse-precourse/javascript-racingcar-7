import RaceController from './RaceController.js';

class App {
  constructor() {
    this.raceController = new RaceController();  
  }
  async run() {
    await this.raceController.startRace(); 
  }
}

export default App;
