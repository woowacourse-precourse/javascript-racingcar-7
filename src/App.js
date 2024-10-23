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
  #TRACE_CHARACTER = "-";
  async run() {
    const userInputCarNames = await readLineAsync(INPUT_MESSAGE_CAR_NAMES);
    const userInputTryCount = await readLineAsync(INPUT_MESSAGE_TRY_COUNT);
    const carNameList = convertStringToArray(userInputCarNames, ",");
    this.validateCarNameLength(carNameList, 5);
    const tryCount = +userInputTryCount;

    validatePositiveInteger(tryCount);

    const carTraceObject = getObjectWithZeroValue(carNameList);

    for (let i = 0; i < tryCount; i++) {
      for (const carName of carNameList) {
        const randomNum = pickNumberInRange(0, 9);
        const isGo = randomNum >= 4;
        if (isGo) carTraceObject[carName]++;

        const traceString = this.getTraceString(carTraceObject[carName]);

        print(`${carName} : ${traceString}`);
      }
    }
    const carTraceEntries = Object.entries(carTraceObject);
    carTraceEntries.sort((a, b) => b[1] - a[1]);
    const winTrace = carTraceEntries[0][1];
    const winnerList = carTraceEntries
      .filter((carTrace) => carTrace[1] === winTrace)
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
  getTraceString = (count) => this.#TRACE_CHARACTER.repeat(count);
}

export default App;
