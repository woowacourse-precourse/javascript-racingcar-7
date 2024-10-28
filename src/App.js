import { getCarName, getRound } from "./handleInput.js";
import { startRacing } from "./game/startRacing.js";
import { initRacing } from "./game/initRacing.js";

class App {
  async run() {
    const carNames = await getCarName();
    const round = await getRound();

    const initRace = initRacing(round, carNames);
    startRacing(initRace);
  }
}

export default App;
