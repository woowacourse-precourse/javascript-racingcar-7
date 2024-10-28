import { run as racingcar } from "./racingcar.js";

class App {
  async run() {
    await racingcar();
  }
}

export default App;
