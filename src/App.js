import Car from "./Car.js";
import { inputCarNames, inputCount } from "./input.js";
import parseCarNames from "./utils/parseCarNames.js";
import validateCarNames from "./validator/carValidator.js";
import validateCount from "./validator/countValidator.js";

class App {
  async run() {
    const carNamesInput = await inputCarNames();
    const carNames = parseCarNames(carNamesInput);
    const cars = carNames.map((name) => {
      validateCarNames(name);
      return new Car(name, 0);
    });

    const countInput = await inputCount();
    const count = validateCount(countInput);

    for (let i = 0; i < count; i++) {
      cars.forEach((car) => {
        car.moveCar();
      });
    }
  }
}

export default App;
