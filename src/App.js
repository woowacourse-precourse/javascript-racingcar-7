import InputView from './view/input-view.js';
import validateCarName from './validation/validate-carname.js';
import validateAttemptCount from './validation/validate-attempt-count.js';
import Race from './model/race.js';

class App {
  constructor() {
    this.inputView = new InputView();
  }

  async run() {
    const carNamesInput = await this.inputView.getCarNames();
    const carNameList = carNamesInput.split(',');
    validateCarName(carNameList);

    const attemptCountInput = await this.inputView.getAttemptCount();
    const attemptCount = parseInt(attemptCountInput, 10);
    validateAttemptCount(attemptCount);

    const race = new Race(carNameList, attemptCount);
    race.play();
  }
}

export default App;
