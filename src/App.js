import getUserInput from "./getUserInput.js";

class App {
  async run() {
    const { carNameString, numberOfAttemps } = getUserInput();
  }
}

export default App;
