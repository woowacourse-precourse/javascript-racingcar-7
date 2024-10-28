import { Console } from "@woowacourse/mission-utils";
import {
  getCarNames,
  checkForDuplicates,
  hasInvalidCarNameLength,
  getTryCount,
  isPositiveInteger,
  startRace,
  printWinners,
} from "./utils/index.js";
import Car from "./Car.js";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      checkForDuplicates(carNames);
      hasInvalidCarNameLength(carNames);

      const tryCount = await getTryCount();
      isPositiveInteger(tryCount);

      const cars = carNames.map((name) => new Car(name));
      startRace(cars, tryCount);
      printWinners(cars);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;
