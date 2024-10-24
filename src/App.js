import { OUTPUT_MESSAGE_WINNER } from "./constants";
import Input from "./Input";
import Race from "./Race";
import {
  getKeyArrayHasSameValueInMap,
  getMapFilledZeroValue,
  getMaxValueInMap,
  getRepeatedString,
  pickNumberInRange,
  print,
} from "./utils";

class App {
  async run() {
    const { carNameArray, tryCount } = await this.#getInput();
    const winnerCarArray = this.#raceRun(carNameArray, tryCount);

    print(`${OUTPUT_MESSAGE_WINNER}${winnerCarArray.join(", ")}`);
  }

  async #getInput() {
    const [userInputCarNames, userInputTryCount] = await Input.getUserInput();
    const carNameArray = Input.processCarNames(userInputCarNames);
    const tryCount = Input.processTryCount(userInputTryCount);

    return {
      carNameArray,
      tryCount,
    };
  }

  #raceRun(carNameArray, tryCount) {
    const race = new Race(carNameArray, tryCount);
    race.run();
    return race.getWinnerArray;
  }
}

export default App;
