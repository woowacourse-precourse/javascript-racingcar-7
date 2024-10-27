import { Console } from "@woowacourse/mission-utils";
[];
import { getCarNames } from "./input/getCarNames.js";
import { getMoveCount } from "./input/getMoveCount.js";
import { calculateMovement } from "./utils/calculateMovement.js";
import { printResult } from "./output/printResult.js";
import { findWinnerIndex } from "./utils/findWinnerIndex.js";
import { printWinner } from "./output/printWinner.js";

class App {
  async run() {
    try {
      const racingCars = await getCarNames();
      const racingCarsMovement = new Array(racingCars.length).fill(0);
      const moveCount = await getMoveCount();

      Console.print("\n실행 결과\n");
      for (let i = 0; i < moveCount; i++) {
        racingCars.map((car, index) => {
          const randomMovement = calculateMovement();
          racingCarsMovement[index] = racingCarsMovement[index] +=
            randomMovement;
        });
        printResult(racingCars, racingCarsMovement);
      }

      const winnerIndex = findWinnerIndex(racingCarsMovement);
      printWinner(racingCars, [winnerIndex]);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
