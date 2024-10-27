import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants.js";
import { getCarNames, getMoveAttempts } from "./utils/inputProcessor.js";
import { race } from "./utils/raceProcessor.js";
import { determineWinners } from "./utils/winnerDeterminer.js";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      const moveAttempts = await getMoveAttempts();
      Console.print(MESSAGES.RESULT_HEADER);

      const results = race(carNames, moveAttempts);
      const winners = determineWinners(carNames, results);
      Console.print(`${MESSAGES.WINNER_ANNOUNCEMENT}${winners.join(", ")}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
