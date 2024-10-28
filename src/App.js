import InputView from "./views/InputView.js";

class App {
  async run() {
    await InputView.inputCarName();
  }
}

export default App;
