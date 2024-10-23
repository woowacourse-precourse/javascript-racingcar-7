import {
  ERROR_MESSAGE_CAR_NAME_OVER_FIVE,
  ERROR_MESSAGE_NOT_INTEGER,
  ERROR_MESSAGE_NOT_NUMBER,
  ERROR_MESSAGE_NOT_POSITIVE_POSITIVE,
  INPUT_MESSAGE_CAR_NAMES,
  INPUT_MESSAGE_TRY_COUNT,
  OUTPUT_MESSAGE_WINNER,
} from "./constants";
import { pickNumberInRange, print, readLineAsync } from "./utils";

class App {
  async run() {
    const userInputCarNames = await readLineAsync(INPUT_MESSAGE_CAR_NAMES);
    const userInputTryCount = await readLineAsync(INPUT_MESSAGE_TRY_COUNT);
    const carNameList = userInputCarNames.split(",");
    for (const carName of carNameList) {
      if (carName.length >= 5)
        throw new Error(ERROR_MESSAGE_CAR_NAME_OVER_FIVE);
    }
    const tryCount = +userInputTryCount;

    if (isNaN(tryCount)) throw new Error(ERROR_MESSAGE_NOT_NUMBER);
    if (tryCount < 0) throw new Error(ERROR_MESSAGE_NOT_POSITIVE_POSITIVE);
    if (!Number.isInteger(tryCount)) throw new Error(ERROR_MESSAGE_NOT_INTEGER);

    const carPositions = {};
    for (let i = 0; i < tryCount; i++) {
      for (const carName of carNameList) {
        const randomNum = pickNumberInRange(0, 9);
        const isGo = randomNum >= 4;
        if (isGo) {
          if (carPositions[carName]) {
            carPositions[carName]++;
          } else {
            carPositions[carName] = 1;
          }
        }
        const positionBlock = "-".repeat(carPositions[carName] ?? 0);
        print(`${carName} : ${positionBlock}`);
      }
    }
    const carPositionEntries = Object.entries(carPositions);
    carPositionEntries.sort((a, b) => b[1] - a[1]);
    const winPosition = carPositionEntries[0][1];
    const winnerList = carPositionEntries
      .filter((carPosition) => carPosition[1] === winPosition)
      .map((it) => it[0]);

    print(`${OUTPUT_MESSAGE_WINNER}${winnerList.join(", ")}`);
  }
}

export default App;
