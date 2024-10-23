import { Console } from "@woowacourse/mission-utils";
import { getCarsName } from "./inputView.js";
import { checkCarsName } from "./validate.js"

class App {
  async run() {
    const carsNames = await getCarsName();
    const carsList = carsNames.split(",");
    
    checkCarsName(carsList);
  }
}

export default App;
