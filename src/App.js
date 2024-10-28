import { MESSAGE } from './constant';
import Simulator from './Simulator.js';
import { readUserInput } from './util/io.js';
import splitByComma from './util/splitByComma';
import Validator from './Validator';

class App {
  async run() {
    const input = await readUserInput(MESSAGE.PROMPT_NAME_USER_INPUT);
    Validator.validate(input);
    const cars = splitByComma(input);
    Validator.validate(cars);

    const attemptCount = await readUserInput(MESSAGE.PROMPT_COUNT_USER_INPUT);
    Validator.validate(+attemptCount);

    const simulator = new Simulator(cars);
    for (let i = 0; i < attemptCount; i++) {
      simulator.simulate();
    }
    simulator.printWinner();
  }
}

export default App;
