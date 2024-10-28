import { MESSAGE, RANGE } from './constant';
import { printOutput } from './util/io';
import pickRandomNumberInRange from './util/pickRandomNumberInRange';
import printSimulate from './util/printSimulate';

class Simulator {
  #state;

  constructor(names) {
    printOutput(MESSAGE.EXECUTE_OUTPUT);
    this.#state = names.map((name) => ({ name, count: 0 }));
  }

  #canMoveForward() {
    return pickRandomNumberInRange(RANGE.START, RANGE.END) >= RANGE.VALID;
  }

  simulate(attemptCount) {
    for (let i = 0; i < attemptCount; i++) {
      this.#state = this.#state.map(({ name, count }) => {
        if (this.#canMoveForward()) count++;
        printSimulate(name, count);
        return { name, count };
      });
      printOutput('');
    }
  }

  printWinner() {
    const maxCount = Math.max(...this.#state.map((car) => car.count));
    const winner = this.#state
      .filter((car) => car.count === maxCount)
      .map((car) => car.name);
    printOutput(`${MESSAGE.FINAL_OUTPUT} : ${winner.join(', ')}`);
  }
}

export default Simulator;
