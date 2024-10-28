import { getCarName, getTryNumber } from "./functions/get-input.js";
import Race from './Car.js';

class App {
  async run() {
    const carList = await getCarName();
    const tryNumber = await getTryNumber();
    let positionList = [...carList].map((name) => 0);
    const car = new Race();
    car.raceCar(tryNumber, carList, positionList);
  }
}

export default App;
