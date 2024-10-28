import { getCarsInput } from "./handlers/IOHandler.js";

class App {
  async run() {
    try {
      const carNames = await getCarsInput();
    } catch (err) {
      throw err;
    }
  }
}

export default App;
