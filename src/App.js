import { promptCarNames, promptTryCount } from './controllers/CarController.js';
import { startRace } from './controllers/RaceController.js';

class App {
  async run() {
    const carNames = await promptCarNames();
    const tryCount = await promptTryCount();
    startRace(carNames, tryCount);
  }
}

export default App;
