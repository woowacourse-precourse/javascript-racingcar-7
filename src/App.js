import Race from './Race.js';

class App {
  constructor() {
    this.race = new Race();  
  }
  async run() {
    await this.race.startRace(); 
  }
}

export default App;
