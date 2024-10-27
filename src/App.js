import { Console } from "@woowacourse/mission-utils";
import { getCars, getRound } from "./InputHandler.js";
import { runGame } from "./GameHandler.js";

class App {
  async run() {
    try {
      const cars = await getCars();
      const round = await getRound();
      const result = await runGame(cars, round);

    } catch(error) {
      throw error;
    }
  }
}

export default App;
