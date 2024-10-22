import InputView from './view/InputView.js';

class App {
  constructor() {
    this.inputview = new InputView();
  }

  async run() {
    const userCarName = this.inputview.getCarNamePrompt();
  }
}

export default App;
