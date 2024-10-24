import {
  ERROR_MESSAGE_CAR_NAME_OVER_FIVE,
  INPUT_MESSAGE_CAR_NAMES,
  INPUT_MESSAGE_TRY_COUNT,
  OUTPUT_MESSAGE_WINNER,
} from "./constants";
import {
  splitIntoArray,
  getKeyArrayHasSameValueInMap,
  getMapFilledZeroValue,
  getMaxValueInMap,
  getRepeatedString,
  pickNumberInRange,
  print,
  readLineAsync,
  validatePositiveInteger,
  validateStringArrayLength,
} from "./utils";

class App {
  #TRACE_CHARACTER = "-";
  #MAX_CAR_NAME_LENGTH = 5;
  async run() {
    const [userInputCarNames, userInputTryCount] = await this.getUserInput();
    const carNameArray = this.processCarNames(userInputCarNames);
    const tryCount = this.processTryCount(userInputTryCount);

    const carTraceMap = getMapFilledZeroValue(carNameArray);

    const afterRaceTraceMap = this.race(carTraceMap, carNameArray, tryCount);

    const maxTrace = getMaxValueInMap(afterRaceTraceMap);
    const winnerCarArray = getKeyArrayHasSameValueInMap(
      afterRaceTraceMap,
      maxTrace
    );

    print(`${OUTPUT_MESSAGE_WINNER}${winnerCarArray.join(", ")}`);
  }

  async getUserInput() {
    const carNames = await readLineAsync(INPUT_MESSAGE_CAR_NAMES);
    const tryCount = await readLineAsync(INPUT_MESSAGE_TRY_COUNT);

    return [carNames, tryCount];
  }

  processCarNames(userInputCarNames) {
    const carNameArray = splitIntoArray(userInputCarNames, ",");
    this.validateCarNameLength(carNameArray, 5);
    return carNameArray;
  }

  processTryCount(userInputTryCount) {
    const tryCount = +userInputTryCount;
    validatePositiveInteger(tryCount);
    return tryCount;
  }

  validateCarNameLength(carNameArray) {
    try {
      validateStringArrayLength(carNameArray, this.#MAX_CAR_NAME_LENGTH);
    } catch (e) {
      throw new Error(ERROR_MESSAGE_CAR_NAME_OVER_FIVE);
    }
  }

  race(carTraceMap, carNameArray, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      for (const carName of carNameArray) {
        const randomNum = pickNumberInRange(0, 9);

        const isMoveForward = this.getMoveForward(randomNum);
        if (isMoveForward)
          carTraceMap.set(carName, carTraceMap.get(carName) + 1);

        const repeatedTraceChracter = getRepeatedString(
          this.#TRACE_CHARACTER,
          carTraceMap.get(carName)
        );

        print(`${carName} : ${repeatedTraceChracter}`);
      }
    }
    return carTraceMap;
  }

  getMoveForward(num) {
    return num >= 4;
  }
}

export default App;
