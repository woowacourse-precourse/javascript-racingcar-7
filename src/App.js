import { Console, Random } from "@woowacourse/mission-utils";
import Input from "./utils/input.js";
import Output from "./utils/output.js";

class App {
  async run() {
    const cars = await Input.getCars();

    const carRacingInfo = {};

    cars.forEach((car) => {
      carRacingInfo[car] = 0;

      if (5 < car.length) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });

    const tries = await Input.getTries();

    Output.printWinners(cars);
  }
}

export default App;
