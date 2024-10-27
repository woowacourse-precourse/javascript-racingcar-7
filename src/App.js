import * as UserInput from "./UserInput.js";
class App {
  async run() {
    const carNames = await UserInput.enterCarNames();
    const roundCount = await UserInput.enterRoundCount();
  }
}

export default App;
