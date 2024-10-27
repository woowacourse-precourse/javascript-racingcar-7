import { getCarName, getRound } from "./handleInput.js";
import { startRacing } from "./gameController.js";
import { printRacing } from "./printRacing.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNames = await getCarName();
    const round = await getRound();
    const carCount = carNames.length;

    let carDistances = Array(carCount).fill(0);
    carDistances = startRacing(round, carDistances, carCount, carNames);
  }
}

export default App;
