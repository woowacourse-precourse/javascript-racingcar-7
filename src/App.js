import Car from "./models/car.js";
import { getInput, printResult } from "./libs/utils.js";
import { CARS_NAME_REGEXP, INFO_MESSAGE } from "./libs/constants.js";
import { validateCarNameLength, validateRacerAmount } from "./libs/validate.js";

class App {
  async run() {
    const carsName = await getInput(INFO_MESSAGE.QUESTION_CARS_NAME);
    const carseNameArr = carsName.split(CARS_NAME_REGEXP).filter((name) => name.trim());
    validateRacerAmount(carseNameArr.length);
    const cars = carseNameArr.map((name) => {
      validateCarNameLength(name);
      return new Car(name);
    });

    const rounds = await getInput(INFO_MESSAGE.QUESTION_TRAIL);

    for (let i = 0; i < rounds; i++) {
      cars.forEach((car) => {
        car.attemptMove();
        printResult(`${car.name} : ${car.position}`);
      });
    }
  }
}

export default App;
