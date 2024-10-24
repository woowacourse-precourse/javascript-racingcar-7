import { inputCars, inputTrialCount, printCarsMove, printWinners } from "./interfaceUtils.js";
import { isCarNamesValid } from "./validationUtils.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carsUserInput = await inputCars();
    const cars = carsUserInput.split(",");

    if (!isCarNamesValid(cars)) throw new Error("[ERROR]");

    const trialCount = await inputTrialCount();

    const carsMap = new Map(cars.map((car) => [car, 0]));

    for (let i = 0; i < trialCount; i++) {
      for (const [carName, carCount] of carsMap) {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
          carsMap.set(carName, carCount + 1);
        }
      }
      printCarsMove(carsMap);
    }

    const winningLength = Math.max(...carsMap.values());
    const winnerCars = [];
    for (const [carName, carCount] of carsMap) {
      if (carCount === winningLength) winnerCars.push(carName);
    }

    printWinners(winnerCars);
  }
}

export default App;
