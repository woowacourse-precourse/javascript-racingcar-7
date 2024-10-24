import { OUTPUT_MESSAGE_WINNER } from "./constants";
import Input from "./Input";
import {
  getKeyArrayHasSameValueInMap,
  getMapFilledZeroValue,
  getMaxValueInMap,
  getRepeatedString,
  pickNumberInRange,
  print,
} from "./utils";

class App {
  #TRACE_CHARACTER = "-";
  async run() {
    const [userInputCarNames, userInputTryCount] = await Input.getUserInput();
    const carNameArray = Input.processCarNames(userInputCarNames);
    const tryCount = Input.processTryCount(userInputTryCount);

    const carTraceMap = getMapFilledZeroValue(carNameArray);

    const afterRaceTraceMap = this.race(carTraceMap, carNameArray, tryCount);

    const maxTrace = getMaxValueInMap(afterRaceTraceMap);
    const winnerCarArray = getKeyArrayHasSameValueInMap(
      afterRaceTraceMap,
      maxTrace
    );

    print(`${OUTPUT_MESSAGE_WINNER}${winnerCarArray.join(", ")}`);
  }

  race(carTraceMap, carNameArray, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      for (const carName of carNameArray) {
        const newPosition = this.moveCarForward(carTraceMap.get(carName));
        carTraceMap.set(carName, newPosition);
        this.printCarPosition(carName, newPosition);
      }
    }
    return carTraceMap;
  }

  moveCarForward(currentPosition) {
    const randomNum = pickNumberInRange(0, 9);
    const isMoveForward = this.getMoveForward(randomNum);
    if (isMoveForward) return currentPosition + 1;
    return currentPosition;
  }

  getMoveForward(num) {
    return num >= 4;
  }

  printCarPosition(carName, position) {
    const repeatedTraceChracter = getRepeatedString(
      this.#TRACE_CHARACTER,
      position
    );

    print(`${carName} : ${repeatedTraceChracter}`);
  }
}

export default App;
