import Car from './Car.js';
import Console from './utils/Console.js';
import Comparator from './utils/Comparator.js';
import Parser from './utils/Parser.js';
import RandomNumber from './utils/RandomNumber.js';
import Validator from './utils/Validator.js';

export default class RacingGame {
  #cars = [];
  #totalRounds = 0;

  async start() {
    const carNamesInput = await Console.getCarNames();
    const carNames = Parser.splitByComma(carNamesInput);
    Validator.validateCarNames(carNames);
    this.#initializeCars(carNames);

    this.#totalRounds = await Console.getTotalRounds();
    Validator.validateTotalRounds(this.#totalRounds);

    this.#runRace();

    const winners = Parser.joinWithComma(
      Comparator.determineWinners(this.#cars)
    );
    Console.printWinners(winners);
  }

  #initializeCars(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  #runRace() {
    Console.printLineBreak();
    Console.printExecutionResultMessage();

    for (let round = 0; round < this.#totalRounds; round++) {
      this.#processRound();
      Console.printLineBreak();
    }
  }

  #processRound() {
    for (const car of this.#cars) {
      this.#tryMoveCar(car);
      Console.printDistance(car);
    }
  }

  #tryMoveCar(car) {
    const randomNumber = RandomNumber.generateNumberZeroToNine();

    if (Comparator.checkAtLeastFour(randomNumber)) {
      car.move();
    }
  }
}
