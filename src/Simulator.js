import { MESSAGE } from './constant';
import { printOutput } from './util/io';
import pickRandomNumberInRange from './util/pickRandomNumberInRange';
import printSimulate from './util/printSimulate';

class Simulator {
  constructor(names) {
    printOutput(MESSAGE.EXECUTE_OUTPUT);
    this.state = names.reduce((arr, name) => {
      arr.push({ [name]: 0 });
      return arr;
    }, []);
  }

  #canMoveForward() {
    if (pickRandomNumberInRange(0, 9) >= 4) return true;
    return false;
  }

  simulate() {
    this.state = this.state.map(({ name, count }) => {
      if (this.#canMoveForward()) count++;
      printSimulate(name, count);
      return { name, count };
    });
    printOutput('');
  }
}

export default Simulator;
