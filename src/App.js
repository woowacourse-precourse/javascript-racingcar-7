// INPUT : pobi,woni,jun

import { promptCarNames } from './controllers/CarController.js';

class App {
  async run() {
    promptCarNames();
  }
}

export default App;
