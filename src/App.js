import { getCarNames, getRoundCount } from './services/input.js';

class App {
  async run() {
    const carNames = await getCarNames();
    const roundCount = await getRoundCount();
  }
}

export default App;
