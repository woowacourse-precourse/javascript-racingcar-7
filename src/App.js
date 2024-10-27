import { OUTPUT_MESSAGE_WINNER } from './lib/constants.js';
import Input from './Input.js';
import Race from './Race.js';
import { print } from './lib/utils.js';

class App {
  async run() {
    const [carArray, tryCount] = await App.#getInput();
    const winnerCarArray = App.#runRace(carArray, tryCount);
    App.#printOutput(winnerCarArray);
  }

  static async #getInput() {
    const input = new Input();
    await input.getUserInput();
    const carArray = input.parseCars();
    const tryCount = input.parseTryCount();

    return [carArray, tryCount];
  }

  static #runRace(carArray, tryCount) {
    const race = new Race(carArray, tryCount);
    const winnerCarArray = race.run();
    return winnerCarArray;
  }

  static #printOutput(winnerCarArray) {
    print(`${OUTPUT_MESSAGE_WINNER}${winnerCarArray.join(', ')}`);
  }
}

export default App;
