import { getCarNames } from './services/input.js';

class App {
  async run() {
    const carNames = await getCarNames();
  }
}

export default App;
