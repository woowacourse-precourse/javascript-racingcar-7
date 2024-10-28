import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, NUMBER } from "./constants.js";
import Car from "./Car.js";
import Validator from "./Validator.js";

class App {
  async run() {
    const nameInput = await Console.readLineAsync(MESSAGE.CARNAME_INPUT);
    Validator.validateNameInput(nameInput);

    const cars = nameInput.split(",").map((name) => new Car(name));

    const tryCount = await Console.readLineAsync(MESSAGE.TRYCOUNT_INPUT);
    Validator.validateTryCountInput(tryCount);
    const tryNumber = Number(tryCount);

    for (let i = 0; i < tryNumber; i++) {
      this.randomMove(cars);
      this.printResult(cars);
    }
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(
      NUMBER.START_NUMBER,
      NUMBER.LAST_NUMBER
    );
  }

  randomMove(cars) {
    cars.forEach((car) => {
      const randomNumber = this.getRandomNumber();
      if (randomNumber >= NUMBER.LIMIT_NUMBER) {
        car.move();
      }
    });
  }

  printResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
    });
  }
}

export default App;
