import { getCarNames } from "./input/getCarNames.js";
import { getMoveCount } from "./input/getMoveCount.js";
import { calculateMovement } from "./utils/calculateMovement.js";
import { printResult } from "./output/printResult.js";

class App {
  async run() {
    try {
      const racingCars = await getCarNames();
      const racingCarsMovement = new Array(racingCars.length).fill(0);
      const moveCount = await getMoveCount();

      for (let i = 0; i < moveCount; i++) {
        racingCars.map((car, index) => {
          const randomMovement = calculateMovement();
          racingCarsMovement[index] = racingCarsMovement[index] +=
            randomMovement;
        });
        printResult(racingCars, racingCarsMovement);
      }
    } catch (error) {
      throw error;
    }
  }
}

export default App;
