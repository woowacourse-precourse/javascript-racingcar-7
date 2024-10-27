import InputView from "./view/InputView.js";

class App {
  constructor() {
    this.InputView = new InputView();
  }
  async run() {
    const value = await this.InputView.getCarNames();
  }
}

export default App;
