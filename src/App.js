import {
  ERROR_MESSAGE_CAR_NAME_OVER_FIVE,
  ERROR_MESSAGE_NOT_INTEGER,
  ERROR_MESSAGE_NOT_NUMBER,
  ERROR_MESSAGE_NOT_POSITIVE_POSITIVE,
  INPUT_MESSAGE_CAR_NAMES,
  INPUT_MESSAGE_TRY_COUNT,
  OUTPUT_MESSAGE_WINNER,
} from "./constants";
import {
  convertStringToArray,
  getObjectWithZeroValue,
  pickNumberInRange,
  print,
  readLineAsync,
  validatePositiveInteger,
} from "./utils";

class App {
  #MOVEMENT_CHARACTER = "-";
  async run() {
    const userInputCarNames = await readLineAsync(INPUT_MESSAGE_CAR_NAMES);
    const userInputTryCount = await readLineAsync(INPUT_MESSAGE_TRY_COUNT);
    const carNameList = convertStringToArray(userInputCarNames, ",");
    this.validateCarNameLength(carNameList, 5);
    const tryCount = +userInputTryCount;

    validatePositiveInteger(tryCount);

    const carPositionObject = getObjectWithZeroValue(carNameList);

    for (let i = 0; i < tryCount; i++) {
      for (const carName of carNameList) {
        const randomNum = pickNumberInRange(0, 9);
        const isGo = randomNum >= 4;
        if (isGo) carPositionObject[carName]++;

        const positionBlock = this.#MOVEMENT_CHARACTER.repeat(
          carPositionObject[carName] ?? 0
        );
        print(`${carName} : ${positionBlock}`);
      }
    }
    const carPositionEntries = Object.entries(carPositionObject);
    carPositionEntries.sort((a, b) => b[1] - a[1]);
    const winPosition = carPositionEntries[0][1];
    const winnerList = carPositionEntries
      .filter((carPosition) => carPosition[1] === winPosition)
      .map((it) => it[0]);

    print(`${OUTPUT_MESSAGE_WINNER}${winnerList.join(", ")}`);
  }
  validateCarNameLength(carNameList, maxLength) {
    const isAnyCarNameLengthOverMax = carNameList.some(
      (carName) => carName.length > maxLength
    );
    if (isAnyCarNameLengthOverMax)
      throw new Error(ERROR_MESSAGE_CAR_NAME_OVER_FIVE);
  }
}

export default App;
