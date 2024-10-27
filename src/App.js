import { getCarName, getRound } from "./handleInput";

class App {
  async run() {
    const CAR_NAME = await getCarName();
    const ROUND = await getRound();
  }
}

export default App;
