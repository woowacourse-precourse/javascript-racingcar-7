import {Console} from "@woowacourse/mission-utils";
import getCars from "./userIO/getCars.js";
import Car from "./logic/Car.js";
import printRaceResults from "./userIO/printRaceResults.js";

class App {
  async run() {
    const carNames = await getCars();
    const cars = carNames.map((name) => new Car(name));

    const attemptCount = await Console.readLineAsync("시도 횟수를 입력하시오.\n");
    printRaceResults(Number(attemptCount), cars);
  }
}

export default App;
