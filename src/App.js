import InputView from './View/InputView.js';

class App {
  #input_view = new InputView();

  async run() {
    const carNames = await this.#input_view.readCarNamesFromInput();
    console.log(carNames);
  }
}

export default App;
