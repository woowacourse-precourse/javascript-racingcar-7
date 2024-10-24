import { Console } from "@woowacourse/mission-utils";
import { getCarsName, getAttemptNumber } from "./inputView.js";
import { checkAttemptNum, checkCarsName } from "./validate.js";
import Car from './Car.js'
import Race from './Race.js';

class App {
  async run() {
    const carsNames = await getCarsName();
    const carsList = carsNames.split(",");
    
    checkCarsName(carsList);

    const attemptNum = await getAttemptNumber();

    checkAttemptNum(attemptNum);
  }
}

export default App;
