import { promptCarNames, promptTryCount } from './controllers/CarController.js';

class App {
  async run() {
    promptCarNames();
    promptTryCount();
  }
}

export default App;
