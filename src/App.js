import CarRace from './CarRace.js';

class App {
  async run() {
    const carRace = new CarRace();
    await carRace.raceStart();
  }
}

export default App;
