import { splitByComma } from './utils/splitByComma.js';
import InputView from './views/InputView.js';
import Car from './Car.js';
import Validator from './Validator.js';

const MOVE_THRESHOLD = 4;

class Race {
  #carInstance;

  async play() {
    const carNames = await InputView.inputNames();
    const carsList = splitByComma(carNames);
    this.#carInstance = carsList.map((name) => new Car(name));

    const raceAttempt = await InputView.inputAttempt();
    const validAttempt = this.#validateAttempt(raceAttempt);
  }

  #validateAttempt(attempt) {
    const validator = new Validator();
    return validator.validateAttempt(attempt);
  }
}

export default Race;
