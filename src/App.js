import { MESSAGES } from "./constants.js";
import {
  checkValidDelimiter,
  checkEmpty,
  checkValidLength,
  readInput,
  checkValidNumber,
  shouldMove,
  printResult,
} from "./utils.js";

class App {
  constructor(delimiter = ",", maxNameLength = 5) {
    this.delimiter = delimiter;
    this.maxNameLength = maxNameLength;
  }

  validateCarNames(inputs) {
    checkEmpty(inputs, MESSAGES.ERROR_EMPTY_NAMES);
    checkValidDelimiter(
      inputs,
      this.delimiter,
      MESSAGES.ERROR_INVALID_DELIMITER
    );
    checkValidLength(
      inputs,
      this.maxNameLength,
      MESSAGES.ERROR_INVALID_NAME_LENGTH
    );

    return inputs;
  }

  validateCount(count) {
    checkEmpty(count, MESSAGES.ERROR_EMPTY_NAMES);
    checkValidNumber(count);

    return count;
  }

  async getCarNames() {
    const inputs = await readInput(MESSAGES.PROMPT_CAR_NAMES);

    return this.validateCarNames(inputs).split(this.delimiter);
  }

  async getCount() {
    const count = await readInput(MESSAGES.PROMPT_ATTEMPT_COUNT);

    return this.validateCount(count, MESSAGES.ERROR_INVALID_NUMBER);
  }

  countMove(number, array) {
    for (let i = 0; i < number; i++) {
      if (shouldMove()) array[i] += 1;
    }
  }

  moveCars(carNames, array) {
    for (const [i, carName] of carNames.entries()) {
      printResult(carName.trim() + " : " + "-".repeat(array[i]));
    }
  }

  displayCarProgress(carNames, count, array) {
    printResult(MESSAGES.PRINT_PROGRESS);

    for (let i = 0; i < count; i++) {
      this.countMove(carNames.length, array);
      this.moveCars(carNames, array);
      printResult(" ");
    }
  }

  play(carNames, count) {
    const progress = Array(carNames.length).fill(0);

    this.displayCarProgress(carNames, count, progress);
  }

  async run() {
    const carNames = await this.getCarNames();
    const count = await this.getCount();
    this.play(carNames, count);
  }
}

export default App;
