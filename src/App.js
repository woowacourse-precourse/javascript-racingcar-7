import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, NUMBER } from "./constants.js";
import Car from "./Car.js";
import Validator from "./Validator.js";

class App {
  async run() {
    const nameInput = await Console.readLineAsync(MESSAGE.CARNAME_INPUT);
    Validator.validateNameInput(nameInput);

    const carNames = nameInput.split(",").map((name) => new Car(name));

    const tryCount = await Console.readLineAsync(MESSAGE.TRYCOUNT_INPUT);
    Validator.validateTryCountInput(tryCount);
    const tryNumber = Number(tryCount);

    for (let i = 0; i < tryNumber; i++) {
      this.randomMove(carNames);
    }
    Console.print(carNames);
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(
      NUMBER.START_NUMBER,
      NUMBER.LAST_NUMBER
    );
  }

  randomMove(cars) {
    cars.forEach((car) => {
      if (this.getRandomNumber() > NUMBER.LIMIT_NUMBER) {
        car.move();
      }
    });
  }
}

export default App;
