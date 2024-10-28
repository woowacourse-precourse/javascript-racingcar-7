import { promptCarNames, promptTryCount } from './controllers/CarController.js';

class App {
  async run() {
    await promptCarNames();
    await promptTryCount();
  }
}

export default App;
