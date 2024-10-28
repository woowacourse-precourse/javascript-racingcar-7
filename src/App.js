import RaceController from './controller/RaceController.js'; // 수정된 부분

class App {
  async run() {
    const raceController = new RaceController();
    await raceController.startRace();
  }
}

export default App;
