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
    const winnerCarArray = this.#runRace(carNameArray, tryCount);
    this.#printOutput(winnerCarArray);
  }

  async #getInput() {
    const input = new Input();
    await input.getUserInput();
    const carNameArray = input.processCarNames();
    const tryCount = input.processTryCount();

    return {
      carNameArray,
      tryCount,
    };
  }

  #runRace(carNameArray, tryCount) {
    const race = new Race(carNameArray, tryCount);
    race.run();
    return race.getWinnerArray;
  }

  #printOutput(winnerCarArray) {
    print(`${OUTPUT_MESSAGE_WINNER}${winnerCarArray.join(", ")}`);
  }
}

export default App;
