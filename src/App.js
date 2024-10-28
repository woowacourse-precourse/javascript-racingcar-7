import { Console } from "@woowacourse/mission-utils";
import { getCars, getRound } from "./utils/InputHandler.js";
import { runGame } from "./utils/GameHandler.js";
import { findWinners } from "./utils/WinnerHandler.js";

class App {
  async run() {
    try {
      const cars = await getCars();
      const round = await getRound();
      const result = await runGame(cars, round);
      const winners = findWinners(result);
      Console.print(`최종 우승자 : ${winners.join(", ")}`);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
