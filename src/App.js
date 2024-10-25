import InputView from './View/InputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const carNames = await inputView.readCarNames();

    console.log(carNames);
  }
}

export default App;
