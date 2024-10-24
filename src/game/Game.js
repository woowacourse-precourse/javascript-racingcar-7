import Car from './Car.js';
import Console from './Console.js';
import Comparator from './utils/Comparator.js';
import Parser from './utils/Parser.js';
import RandomNumber from './utils/RandomNumber.js';
import Validator from './utils/Validator.js';

export default class Game {
  #carList = [];
  #attemptCount = 0;
  #console = new Console();

  async start() {
    const carNamesInputString = await this.#console.getCarsName();
    const carNamesArray = Parser.splitStringByComma(carNamesInputString);

    Validator.validateCarNameWhitespace(carNamesArray);
    Validator.validateDuplicateCarName(carNamesArray);
    Validator.validateCarNameLength(carNamesArray);

    carNamesArray.forEach((carName) => {
      const car = new Car(carName);
      this.#carList.push(car);
    });

    this.#attemptCount = await this.#console.getAttemptCount();

    Validator.validateAttemptCount(this.#attemptCount);

    let currentAttempt = 0;
    while (currentAttempt < this.#attemptCount) {
      this.#carList.forEach((car) => {
        this.#attemptMove(car);
      });

      currentAttempt++;
    }
  }

  #attemptMove(car) {
    const randomNumber = RandomNumber.generateNumberZeroToNine();

    if (Comparator.checkAtLeastFour(randomNumber)) {
      car.increaseDistance();
    }
  }

  #selectWinners() {}
}
