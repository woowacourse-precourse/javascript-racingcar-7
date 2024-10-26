import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import { inputCarNames, inputCount } from "./input.js";
import parseCarNames from "./utils/parseCarNames.js";
import validateCarName from "./validator/carValidator.js";
import validateCount from "./validator/countValidator.js";
import findMaxMoveCars from "./utils/findMaxMoveCars.js";
import printWinner from "./utils/printWinner.js";
import emptyInput from "./validator/inputValidator.js";

class App {
  async run() {
    const carNamesInput = await inputCarNames();
    emptyInput(carNamesInput);
    const carNames = parseCarNames(carNamesInput);
    const cars = carNames.map((name) => {
      validateCarName(name);
      return new Car(name, 0);
    });

    const countInput = await inputCount();
    const count = validateCount(countInput);

    for (let i = 0; i < count; i++) {
      cars.forEach((car) => {
        car.moveCar();
        car.printCar();
      });
      MissionUtils.Console.print("\n");
    }

    const topCars = findMaxMoveCars(cars);
    printWinner(topCars);
  }
}

export default App;
