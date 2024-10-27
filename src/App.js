import { Console } from "@woowacourse/mission-utils";
import { CarsInput } from "./CarsInput.js";
import { NumberInput } from "./NumberInput.js";
import { Racing } from "./Racing.js";

class App {
  async run() {
    try {
      const carsInput = new CarsInput();
      const cars = await carsInput.getInput();

      const numberInput = new NumberInput();
      const n = await numberInput.getInput();

      const racing = new Racing(cars);

      racing.race(n);

      const winners = racing.RacingResult();
      Console.print(`최종 우승자 : ${winners}`);
    } catch (error) {
      Console.print(error);
      throw error;
    }
  }

}

export default App;
