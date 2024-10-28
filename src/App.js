import { Console, Random } from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator.js";
import Car from "./Car.js";

class App {
  #tryCount;
  #carNames;
  #cars = [];

  async init() {
    await this.setCarNames();
    await this.setTryCount();
    this.makeCar();
  }

  async run() {
    await this.init();
    this.play();
    this.printResult();
    this.printWinners(this.findWinner());
  }

  play() {
    for (let gameRound = 0; gameRound < this.#tryCount; gameRound++) {
      this.#cars.forEach((car) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        car.move(randomNumber);
        car.saveResult();
      });
    }
  }

  printWinners(winners) {
    Console.print(`결과: ${winners.join(", ")}`);
  }

  findWinner(maxDistance = 0, winners = []) {
    this.#cars.forEach((car) => {
      const carDistance = car.getDistance();

      if (maxDistance < carDistance) {
        maxDistance = carDistance;
        winners.length = 0;
        winners.push(car.getName());
      } else if (maxDistance === carDistance) {
        winners.push(car.getName());
      }
    });

    return winners;
  }

  printResult() {
    Console.print("실행 결과");

    for (let gameRound = 0; gameRound < this.#tryCount; gameRound++) {
      this.#cars.forEach((car) => {
        const distanceByRound = car.getResultBy(gameRound);
        Console.print(`${car.getName()}: ${"-".repeat(distanceByRound)}`);
      });

      Console.print("");
    }
  }

  makeCar() {
    this.#carNames.forEach((carName) => {
      const car = new Car(carName);
      this.#cars.push(car);
    });
  }

  async setCarNames() {
    try {
      const userInputCarName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      const carNames = userInputCarName.split(",");

      this.validateCarName(carNames);
      this.#carNames = [...carNames];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async setTryCount() {
    try {
      const userInputTryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      const tryCount = Number(userInputTryCount);

      this.validateTryCount(tryCount);
      this.#tryCount = tryCount;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  validateCarName(carNames) {
    InputValidator.checkBlank(carNames);
    InputValidator.checkDuplication(carNames);
    InputValidator.checkMultiple(carNames);
    InputValidator.checkNameLength(carNames);
  }

  validateTryCount(tryCount) {
    InputValidator.checkPositive(tryCount);
  }
}

export default App;
