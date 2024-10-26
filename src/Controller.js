import view from './view.js';
import validator from './utils/validator.js';
import { STRINGS } from './constants/values.js';
import Car from './Car.js';

class Controller {
  #cars;

  #progress;

  constructor() {
    this.#cars = [];
    this.#progress = {};
  }

  async play() {
    await this.readCars();
  }

  async readCars() {
    const carNameAnswer = await view.readCars();
    const carNames = carNameAnswer.split(STRINGS.inputNameDelimiter);
    validator.validateCarNames(carNames);
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  async readTrialCount() {
    const trialCount = Number(await view.readTrialCount());
    validator.validateTrialCount(trialCount);
  }

  executeOnce() {
    this.#cars.forEach((car) => {
      const { name, progress } = car.execute();
      this.#progress = { ...this.#progress, [name]: progress };
      view.printProgress(name, progress);
    });
    view.printLineBreak();
  }
}

export default Controller;
