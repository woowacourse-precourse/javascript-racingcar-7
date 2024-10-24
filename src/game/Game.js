import Car from './Car.js';
import Console from './utils/Console.js';
import Comparator from './utils/Comparator.js';
import Parser from './utils/Parser.js';
import RandomNumber from './utils/RandomNumber.js';
import Validator from './utils/Validator.js';

export default class Game {
  #carList = [];
  #attemptCount = 0;

  async start() {
    const carNamesInputString = await Console.getCarsName();
    const carNamesArray = Parser.splitStringByComma(carNamesInputString);
    Validator.validateCarNames(carNamesArray);
    this.#carList = carNamesArray.map((carName) => new Car(carName));

    this.#attemptCount = await Console.getAttemptCount();
    Validator.validateAttemptCount(this.#attemptCount);

    this.#runRace();
    this.#selectWinners();
  }

  #runRace() {
    Console.print('\n실행 결과');

    for (let attempt = 0; attempt < this.#attemptCount; attempt++) {
      for (const car of this.#carList) {
        this.#attemptMove(car);
        Console.printDistance(car);
      }

      Console.print('');
    }
  }

  #attemptMove(car) {
    const randomNumber = RandomNumber.generateNumberZeroToNine();

    if (Comparator.checkAtLeastFour(randomNumber)) {
      car.move();
    }
  }

  #selectWinners() {
    const winnersArray = Comparator.selectFurthestCars(this.#carList);
    Console.printWinners(winnersArray);
  }
}
