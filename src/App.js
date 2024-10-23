import InputView from './view/InputView.js';

class App {
  constructor() {
    this.inputView = new InputView();
  }

  async run() {
    await this.inputView.getCarNameInput();
  }
}

export default App;
