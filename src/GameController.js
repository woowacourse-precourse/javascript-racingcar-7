import Car from './Car.js';
import { carNameValidate, numberValidate } from './validate.js';
import InputView from './view/InputView.js';

class GameController {
  #cars;

  #tryNumber;

  constructor() {
    this.#cars = [];
    this.#tryNumber = 0;
  }

  async init() {
    await this.#setCars();
    await this.#setTryNumber();
  }

  async #setCars() {
    const carNameArr = await InputView.readCarNames();
    carNameValidate(carNameArr);
    this.#cars = carNameArr.map((carName) => new Car(carName));
  }

  async #setTryNumber() {
    const input = await InputView.readTryNumber();
    numberValidate(input);
    this.#tryNumber = input;
  }

  getInfo() {
    return { cars: this.#cars, tryNumber: this.#tryNumber };
  }
}

export default GameController;
