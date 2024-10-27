import UserInput from './UserInput.js';
import * as validator from './utils/validator.js';
import Racing from './Racing.js';

class App {
  async run() {
    const inputCarNames = await UserInput.getCarNames();
    const carNames = validator.carNameValidator(inputCarNames);

    const inputTryCount = await UserInput.getTryCount();
    const tryCount = validator.tryCountValidator(inputTryCount);

    const racing = new Racing(carNames, tryCount);
    racing.start();
    racing.printWinner();
  }
}

export default App;
