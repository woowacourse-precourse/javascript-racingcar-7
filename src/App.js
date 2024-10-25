import { Console, Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import { validateCarNameList, validateTryCount } from "./validation.js";
import {
  CAR_NAME_INPUT_MESSAGE,
  TRY_COUNT_INPUT_MESSAGE,
} from "./constants/inputMessage.js";
import {
  EMPTY_MESSAGE,
  EXECUTE_RESULT_MESSAGE,
  WINNER_MESSAGE,
} from "./constants/outputMessage.js";

class App {
  #tryCount;
  #cars;

  constructor() {
    this.#tryCount = 0;
    this.#cars = [];
  }

  async run() {
    let carNameList = await this.readCarName();
    validateCarNameList(carNameList);
    this.generateCars(carNameList);

    const tryCount = await this.readTryCount();
    validateTryCount(tryCount);
    this.#tryCount = tryCount;

    this.printGameStart();
    this.generateGame();

    const winner = this.generateGameResult();
    this.printGameResult(winner);
  }

  async readCarName() {
    return await Console.readLineAsync(CAR_NAME_INPUT_MESSAGE);
  }

  async readTryCount() {
    return await Console.readLineAsync(TRY_COUNT_INPUT_MESSAGE);
  }

  generateCars(carNameListProp) {
    const carNameList = carNameListProp.split(",");
    carNameList.forEach((elem) => this.#cars.push(new Car(elem)));
  }

  printGameStart() {
    Console.print(EXECUTE_RESULT_MESSAGE);
  }

  generateGame() {
    for (let i = 0; i < this.#tryCount; i++) {
      this.generateGamePerCycle();
      Console.print(EMPTY_MESSAGE);
    }
  }

  generateGamePerCycle() {
    this.#cars.forEach((car) => {
      const randomNumber = this.calculateRandomNumber();
      this.generateCarMove(car, randomNumber);
      this.printCarmove(car);
    });
  }

  generateCarMove(car, randomNumber) {
    if (randomNumber >= 4) {
      car.increaseProgressCount();
    }
  }

  calculateRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  printCarmove(car) {
    Console.print(car.getName() + " : " + "-".repeat(car.getProgressCount()));
  }

  generateGameResult() {
    return this.calculateMaxProgressCount();
  }

  calculateMaxProgressCount() {
    const winner = [];
    let maximum = Number.MIN_SAFE_INTEGER;

    this.#cars.forEach((car) => {
      if (car.getProgressCount() === maximum) {
        winner.push(car.getName());
        maximum = car.getProgressCount();
      }
      if (car.getProgressCount() > maximum) {
        winner.length = 0;
        winner.push(car.getName());
        maximum = car.getProgressCount();
      }
    });

    return winner;
  }

  printGameResult(winner) {
    Console.print(WINNER_MESSAGE + winner.join(", "));
  }
}

export default App;
