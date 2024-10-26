import InputView from "./view/InputView.js";

class App {
  async run() {
    const inputView = new InputView();
    let carName = await inputView.getCarName();
  }
}

export default App;
