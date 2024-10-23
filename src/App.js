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
  getKeyListHasSameValueInMap,
  getMapWithZeroValue,
  getMaxValueInMap,
  pickNumberInRange,
  print,
  readLineAsync,
  validatePositiveInteger,
} from "./utils";

class App {
  #TRACE_CHARACTER = "-";
  async run() {
    const userInputCarNames = await readLineAsync(INPUT_MESSAGE_CAR_NAMES);
    const userInputTryCount = await readLineAsync(INPUT_MESSAGE_TRY_COUNT);
    const carNameList = convertStringToArray(userInputCarNames, ",");
    this.validateCarNameLength(carNameList, 5);
    const tryCount = +userInputTryCount;

    validatePositiveInteger(tryCount);

    const carTraceMap = getMapWithZeroValue(carNameList);

    for (let i = 0; i < tryCount; i++) {
      for (const carName of carNameList) {
        const randomNum = pickNumberInRange(0, 9);
        const isGo = randomNum >= 4;
        if (isGo) carTraceMap.set(carName, carTraceMap.get(carName) + 1);

        const traceString = this.getTraceString(carTraceMap.get(carName));

        print(`${carName} : ${traceString}`);
      }
    }

    const maxTrace = getMaxValueInMap(carTraceMap);
    const winnerCarList = getKeyListHasSameValueInMap(carTraceMap, maxTrace);
    print(`${OUTPUT_MESSAGE_WINNER}${winnerCarList.join(", ")}`);
  }
  validateCarNameLength(carNameList, maxLength) {
    const isAnyCarNameLengthOverMax = carNameList.some(
      (carName) => carName.length > maxLength
    );
    if (isAnyCarNameLengthOverMax)
      throw new Error(ERROR_MESSAGE_CAR_NAME_OVER_FIVE);
  }
  getTraceString = (count) => this.#TRACE_CHARACTER.repeat(count);
}

export default App;
