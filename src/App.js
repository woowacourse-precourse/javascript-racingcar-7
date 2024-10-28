import { OUTPUT_MESSAGE_WINNER } from './lib/constants.js';
import Input from './Input.js';
import Race from './Race.js';
import { print } from './lib/utils.js';

class App {
  #carArray;

  #tryCount;

  #winnerCarArray;

  async run() {
    await this.#getInput();
    this.#runRace();
    this.#printOutput();
  }

  async #getInput() {
    const input = new Input();

    await input.getUserInput();
    this.#carArray = input.parseCars();
    this.#tryCount = input.parseTryCount();
  }

  #runRace() {
    const race = new Race(this.#carArray, this.#tryCount);

    this.#winnerCarArray = race.run();
  }

  #printOutput() {
    print(`${OUTPUT_MESSAGE_WINNER}${this.#winnerCarArray.join(', ')}`);
  }
}

export default App;
