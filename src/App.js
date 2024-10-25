import Car from "./Car.js";
import { inputNames, splitName, inputNameValidation, inputTryCount } from "./InputValue.js";
import { extractRandomNumber } from "./Move.js";

class App {
  async run() {
    const inputs = await inputNames();
    const carNames = splitName(inputs);

    carNames.forEach(name => inputNameValidation(name));

    const carList = carNames.map(name => new Car(name));
    const inputCount = await inputTryCount();

    let randomNumberList = [];

    for (let index = 0; index < carList.length; index++) {
      randomNumberList.push(extractRandomNumber());
    }
  }
}

export default App;

