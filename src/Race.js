import { splitByComma } from './utils/splitByComma.js';
import InputView from './views/InputView.js';
import Car from './Car.js';

const MOVE_THRESHOLD = 4;

class Race {
  #carInstance;

  async play() {
    const carNames = await InputView.inputNames();
    const carsList = splitByComma(carNames);
    this.#carInstance = carsList.map((name) => new Car(name));
  }
}

export default Race;
