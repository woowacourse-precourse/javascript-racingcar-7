import getCars from "./userIo/getCars.js";
import Car from "./logic/Car.js";

class App {
  async run() {
    const carNames = await getCars();
    const cars = carNames.map((name) => new Car(name));

  }
}

export default App;
