import UserInput from './UserInput.js';
import * as validator from './utils/validator.js';

class App {
  async run() {
    const carNames = await UserInput.getCarNames();
    const tryCount = await UserInput.getTryCount();
  }
}

export default App;
