import inputCarNames from "./utils/InputCarNames.js";

class App {
  async run() {
    const carNames = await inputCarNames();
  }
}

export default App;
