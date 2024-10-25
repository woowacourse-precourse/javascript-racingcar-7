import InputView from './View/InputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const carNames = await inputView.readCarNames();

    console.log(carNames);

    const attemptCount = await inputView.readAttemptCount();

    console.log(attemptCount);
  }
}

export default App;
