import { InputView } from "./View/InputView.js";
import Race from "./Race.js";
import { Validator } from "./Validator.js";

class App {
  async run() {
    const carNameList = await InputView.carNameList();
    const carNameArr = await carNameList.split(",");
    await this.validateCarName(carNameArr);

    const attemptCount = await InputView.attemptCount();

    const race = new Race(carNameArr);

    for (let count = 0; count < attemptCount; count++) {
      race.progressCar();
    }
  }

  async validateCarName(arr) {
    Validator.carNameLength(arr);
    Validator.carNameSame(arr);
  }
}

export default App;
