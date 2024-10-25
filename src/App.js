import { OUTPUT_MESSAGE_WINNER } from "./constants.js";
import Input from "./Input.js";
import Race from "./Race.js";
import { print } from "./utils.js";

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
    const winnerArray = race.run();
    return winnerArray;
  }

  #printOutput(winnerCarArray) {
    print(`${OUTPUT_MESSAGE_WINNER}${winnerCarArray.join(", ")}`);
  }
}

export default App;
