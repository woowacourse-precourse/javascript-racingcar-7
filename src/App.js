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

  generateGame() {
    for (let i = 0; i < this.#tryCount; i++) {
      this.generateGamePerCycle();
    }
  }
  generateGamePerCycle() {
    this.#cars.forEach((elem) => {
      this.generateCarMove(elem);
    });
  }
  generateCarMove(car) {
    const randomNumber = this.calculateRandomNumber();
    Console.print(car.getCarName() + randomNumber);
  }
  calculateRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  printGameStart() {
    Console.print("실행 결과");
  }
}

export default App;
