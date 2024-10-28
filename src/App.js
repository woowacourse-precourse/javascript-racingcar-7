import { getCarNames, getTotalRound } from "./utils/input.js";

class App {
  async run() {
    try {
      const carNameList = await getCarNames();
      const totalRound = await getTotalRound();
    } catch (error) {
      throw new Error(`[ERROR]: ${error.message}`);
    }
  }
}

export default App;
