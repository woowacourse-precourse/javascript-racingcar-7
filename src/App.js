import RaceService from './Service/RaceService.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const carNames = await inputView.readCarNames();
    const attemptCount = await inputView.readAttemptCount();

    const raceService = new RaceService();
    raceService.start(carNames, attemptCount);
  }
}

export default App;
