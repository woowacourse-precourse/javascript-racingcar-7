import RaceController from './controllers/RaceController.js';

class App {
  async run() {
    const raceController = new RaceController();
    await raceController.run();
  }
}

export default App;
