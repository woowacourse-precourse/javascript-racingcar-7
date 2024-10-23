import { Console, Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import { validateCarNameList, validateTryCount } from "./validation.js";

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
    const tryCount = await this.readTryCount();
    validateTryCount(tryCount);
    this.#tryCount = tryCount;

    this.generateCars(carNameList);
    this.printGameStart();
    this.generateGame();
  }

  async readCarName() {
    return await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
  }

  async readTryCount() {
    return await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }

  generateCars(carNameListProp) {
    const carNameList = carNameListProp.split(",");
    Console.print(carNameList);
    carNameList.forEach((elem) => this.#cars.push(new Car(elem)));
  }

  printGameStart() {
    Console.print("실행 결과");
  }

  generateGame() {
    for (let i = 0; i < this.#tryCount; i++) {
      this.generateGamePerCycle();
      Console.print("");
    }
  }

  generateGamePerCycle() {
    this.#cars.forEach((elem) => {
      this.generateCarMove(elem);
      this.printCarmove(elem);
    });
  }

  generateCarMove(car) {
    const randomNumber = this.calculateRandomNumber();
    if (randomNumber >= 4) {
      car.increaseProgressCount();
    }
  }

  calculateRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  printCarmove(car) {
    Console.print(
      car.getCarName() + " : " + "-".repeat(car.getProgressCount())
    );
  }
}

export default App;
