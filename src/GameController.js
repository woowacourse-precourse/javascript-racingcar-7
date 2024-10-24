import Car from './model/Car.js';
import { carNameValidate, numberValidate } from './validate.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import { getRandomNumberInRange } from './utils/random.js';
import { OUTPUT_MESSAGE } from './constant/index.js';

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

  execute() {
    OutputView.racingStartIntro();
    for (let i = 0; i < this.#tryNumber; i += 1) {
      this.#moveCarsOnce();
      const serializedCarsState = this.#serializeCarsState();

      OutputView.printArrayWithNewLine(serializedCarsState);
      OutputView.printBlankLine();
    }
  }

  #moveCarsOnce() {
    this.#cars.forEach((car) => {
      const randomNumber = getRandomNumberInRange(0, 9);
      if (randomNumber >= 4) car.move();
    });
  }

  #serializeCarsState() {
    const serialized = this.#cars.map((car) => {
      const { name, distance } = car.getCarInformation();
      let newDistance = '';
      for (let i = 0; i < distance; i += 1) {
        newDistance += OUTPUT_MESSAGE.STRINGYFY_DISTANCE;
      }
      return `${name} : ${newDistance}`;
    });

    return serialized;
  }

  result() {
    const winners = this.#judgeWinner(this.#cars);
    OutputView.printWinner(winners);
  }

  #judgeWinner() {
    const max = Math.max(...this.#cars.map((car) => car.getCarInformation().distance));
    const winners = this.#cars
      .filter((car) => car.getCarInformation().distance === max)
      .map((car) => car.getCarInformation().name);

    return winners;
  }
}

export default GameController;
