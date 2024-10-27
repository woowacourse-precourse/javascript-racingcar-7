import { Console } from "@woowacourse/mission-utils";
import { getCarNames } from "./input/getCarNames.js";
import { getMoveCount } from "./input/getMoveCount.js";
import { calculateMovement } from "./utils/calculateMovement.js";

class App {
  async run() {
    try {
      const racingCars = await getCarNames();
      const racingCarsMovement = new Array(racingCars.length).fill(0);
      const moveCount = await getMoveCount();

      const randomNumber = calculateMovement();

      racingCars.map((car, index) => {
        const randomMovement = calculateMovement();
        racingCarsMovement[index] = racingCarsMovement[index] += randomMovement;
      });
    } catch (error) {
      throw error;
    }
  }
}

export default App;
