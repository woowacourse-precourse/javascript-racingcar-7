import { Console } from "@woowacourse/mission-utils";
import { parseCarNames } from "./utils.js";

import Car from "./Car.js";
import Validator from "./Validator.js";

class View {
  static async readCarNames() {
    const cars = [];
    let userCarNames = "";
    while (!userCarNames.trim()) {
      userCarNames = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
    }
    const parsedCarNames = parseCarNames(userCarNames);
    Validator.validateCarNamesInput(parsedCarNames);
    parsedCarNames.forEach((car) => cars.push(new Car(car)));
    return cars;
  }

  static async readAttemptCount() {
    let userAttemptCount = 0;
    while (userAttemptCount === 0) {
      userAttemptCount = Number(
        await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
      );
    }
    Validator.validateAttemptCountInput(userAttemptCount);
    return userAttemptCount;
  }

  static printProgress(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.distance)}`);
    });
    Console.print(`\n`);
  }

  static printResult(result) {
    const resultString = result.map((car) => car.name).join(", ");
    Console.print(`최종 우승자 : ${resultString}`);
  }
}

export default View;
