import UserInput from './UserInput.js';
import * as validator from './utils/validator.js';
import Racing from './Racing.js';

class App {
  async run() {
    const carNames = await UserInput.getCarNames();
    validator.carNameValidator(carNames);

    const tryCount = await UserInput.getTryCount();
    validator.tryCountValidator(tryCount);

    const racing = new Racing(carNames, tryCount);
    racing.start();
    racing.printWinner();
  }
}

export default App;
