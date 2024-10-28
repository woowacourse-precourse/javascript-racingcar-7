import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  parseCarNames(userCarNames) {
    const carNames = userCarNames.split(",").filter((car) => car.trim() !== "");
    if (carNames.length < 2) {
      throw new Error("[ERROR] 자동차 이름을 두개 이상 입력해주세요");
    }
    carNames.forEach((el) => {
      if (el.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해주세요");
      }
    });

    return carNames;
  }
  async readCarNames() {
    const cars = [];
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
    while (Number(userAttemptCount) === 0) {
      userAttemptCount = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
    }

    return userAttemptCount;
  }

  async run() {
    const cars = await this.readCarNames();
    const attemptCount = await this.readAttemptCount();
    Console.print(cars);
    Console.print(attemptCount);
  }
}

export default App;
