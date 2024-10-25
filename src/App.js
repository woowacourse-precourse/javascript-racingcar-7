import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const carNames = await inputView.readCarNames();

    console.log(carNames);

    const attemptCount = await inputView.readAttemptCount();

    console.log(attemptCount);

    const outputView = new OutputView();
    outputView.printExecutionResults();
    outputView.printAllCarProgress(carNames, [3, 1]);
  }
}

export default App;
