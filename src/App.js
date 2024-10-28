import { getValidatedCars, getValidatedCount } from "./modules/userInput.js";
import startRace from "./modules/startRace.js";

class App {
  async run() {
    const cars = await getValidatedCars();
    const count = await getValidatedCount();

    startRace(cars, count);
  }
}

export default App;
