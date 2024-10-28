import { getCarsInput, getMoveCountInput } from "./handlers/IOHandler.js";

class App {
  async run() {
    try {
      const carNames = await getCarsInput();
      const moveCount = await getMoveCountInput();
    } catch (err) {
      throw err;
    }
  }
}

export default App;
