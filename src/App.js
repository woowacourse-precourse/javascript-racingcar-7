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

    this.#tryCount = await this.readTryCount();
    validateTryCount(this.#tryCount);

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
    Console.print(`${car.getName()} : ${"-".repeat(car.getProgressCount())}`);
  }

  generateGameResult() {
    const maxProgress = Math.max(
      ...this.#cars.map((car) => car.getProgressCount())
    );
    return this.#cars
      .filter((car) => car.getProgressCount() === maxProgress)
      .map((car) => car.getName());
  }

  printGameResult(winner) {
    Console.print(`${WINNER_MESSAGE} : ${winner.join(", ")}`);
  }
}

export default App;
