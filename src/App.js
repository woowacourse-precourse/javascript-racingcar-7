import * as UserInput from "./UserInput.js";
class App {
  async run() {
    const carNames = await UserInput.enterCarNames();
  }
}

export default App;
