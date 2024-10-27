import {Console} from "@woowacourse/mission-utils";
import {CarsInput} from "./CarsInput.js";
import {NumberInput} from "./NumberInput.js";


class App {
  async run() {
    const carsInput = new CarsInput();
    const cars = await carsInput.getInput();
    Console.print(cars);

    const numberInput = new NumberInput();
    const n = await numberInput.getInput();
    Console.print(n);
  }
}

export default App;
