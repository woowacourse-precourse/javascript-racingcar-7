import { Console } from "@woowacourse/mission-utils";
import { getCarNames } from "./input/getCarNames.js";
import { getMoveCount } from "./input/getMoveCount.js";

class App {
  async run() {
    try {
      const racingCars = await getCarNames();
      const racingCarsNumber = racingCars.length;
      const moveCount = await getMoveCount();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
