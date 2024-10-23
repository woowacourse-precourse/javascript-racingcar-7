import InputView from './view/InputView.js';

class App {
  constructor() {
    this.inputView = new InputView();
  }

  async run() {
    await this.inputView.getCarNameInput();
    await this.inputView.getGameCountInput();
  }
}

export default App;
