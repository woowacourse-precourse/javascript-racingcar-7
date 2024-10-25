import Car from './Car.js';
import Validation from './Validation.js';

class RacingManager {
  #nameInput;

  constructor(nameInput) {
    this.#nameInput = nameInput;
  }

  #normalizeCarNames() {
    const MAX_NAME_LENGTH = 5;
    const nameInput = this.#nameInput;
    const parsedNames = RacingManager.parseCarNames(nameInput);
    const carNames = Validation.carNames(parsedNames, MAX_NAME_LENGTH);
    return carNames;
  }

  register() {
    const nameList = this.#normalizeCarNames();
    const registeredCars = nameList.map((name) => new Car(name));
    return registeredCars;
  }

  static parseCarNames(names) {
    const splittedNames = names.split(',');
    const trimmedNames = splittedNames.map((name) => name.trim());
    return trimmedNames;
  }
}

export default RacingManager;
