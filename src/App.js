import { Console, Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import Validator from "./Validator.js";

class App {
  parseCarNames(userCarNames) {
    const carNames = userCarNames.split(",").filter((car) => car.trim() !== "");
    Validator.validateCarNamesInput(carNames);
    return carNames;
  }
  async readCarNames(cars) {
    let userCarNames = "";

    while (!userCarNames.trim()) {
      userCarNames = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
    }

    const parsedCarNames = this.parseCarNames(userCarNames);

    parsedCarNames.forEach((car) => cars.push(new Car(car)));

    return cars;
  }

  async readAttemptCount() {
    let userAttemptCount = 0;
    while (userAttemptCount === 0) {
      userAttemptCount = Number(
        await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
      );
    }
    Validator.validateAttemptCountInput(userAttemptCount);
    return userAttemptCount;
  }

  excuteAttempt(cars) {
    cars.forEach((car) => {
      const randomNuber = Random.pickNumberInRange(0, 9);
      if (randomNuber > 3) {
        car.increaseDistance();
      }
    });
  }

  printProgress(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.distance)}`);
    });
    Console.print(`\n`);
  }

  runRace(cars, attemptCount) {
    Console.print("\n실행 결과");
    for (let i = 0; i < attemptCount; i++) {
      this.excuteAttempt(cars);
      this.printProgress(cars);
    }
  }

  calculateResult(cars) {
    const sortedCars = [...cars].sort(
      (prev, next) => next.distance - prev.distance
    );
    const result = sortedCars.filter(
      (car) => car.distance === sortedCars[0].distance
    );
    return result;
  }

  async run() {
    const cars = [];
    await this.readCarNames(cars);
    const attemptCount = await this.readAttemptCount();
    this.runRace(cars, attemptCount);
    const result = this.calculateResult(cars);
    Console.print(result);
    Console.print(attemptCount);
  }
}

export default App;
