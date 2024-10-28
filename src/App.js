import GetInput from './io/GetInput.js';
import StartGame from './play/StartGame.js';

class App {
  async run() {
    const carNames = await GetInput.getCarNames();
    const tryCount = await GetInput.getTryCount();
    StartGame.start(carNames, tryCount);
  }
}

export default App;