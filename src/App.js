import { MESSAGE } from './constant';
import Simulator from './Simulator.js';
import { readUserInput } from './util/io.js';
import splitByComma from './util/splitByComma';

class App {
  async run() {
    const input = await readUserInput(MESSAGE.PROMPT_NAME_USER_INPUT);
    const cars = splitByComma(input);
    const simulator = new Simulator(cars);
    const attemptCount = await readUserInput(MESSAGE.PROMPT_COUNT_USER_INPUT);
    for (let i = 0; i < attemptCount; i++) {
      simulator.simulate();
    }
    simulator.printWinner();
  }
}

export default App;
