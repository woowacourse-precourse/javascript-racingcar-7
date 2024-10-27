import InputView from "./view/InputView.js";

class App {
  constructor() {
    this.InputView = new InputView();
  }
  async run() {
    await this.InputView.getCarNames();
  }
}

export default App;
