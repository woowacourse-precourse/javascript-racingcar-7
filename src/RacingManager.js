import Car from './Car.js';
import Validation from './Validation.js';

class RacingManager {
  #nameInput;

  constructor(nameInput) {
    this.#nameInput = nameInput;
  }

  #acceptCarNames() {
    const nameInput = this.#nameInput;
    const parsedNames = RacingManager.parseCarNames(nameInput);
    const carNames = Validation.carNames(parsedNames);
    return carNames;
  }

  register() {
    const nameList = this.#acceptCarNames();
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
