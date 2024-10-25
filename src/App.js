import { OUTPUT_MESSAGE_WINNER } from "./constants.js";
import Input from "./Input.js";
import Race from "./Race.js";
import { print } from "./utils.js";

class App {
  async run() {
    const [carArray, tryCount] = await this.#getInput();
    const winnerCarArray = this.#runRace(carArray, tryCount);
    this.#printOutput(winnerCarArray);
  }

  async #getInput() {
    const input = new Input();
    await input.getUserInput();
    const carArray = input.parseCars();
    const tryCount = input.parseTryCount();

    return [carArray, tryCount];
  }

  #runRace(carArray, tryCount) {
    const race = new Race(carArray, tryCount);
    const winnerArray = race.run();
    return winnerArray;
  }

  #printOutput(winnerCarArray) {
    print(`${OUTPUT_MESSAGE_WINNER}${winnerCarArray.join(", ")}`);
  }
}

export default App;
