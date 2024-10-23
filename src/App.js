import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async run() {
    await this.inputView.getCarNameInput();
    await this.inputView.getGameCountInput();
    this.outputView.spacing();
    this.outputView.gameResultHeader();
  }
}

export default App;
