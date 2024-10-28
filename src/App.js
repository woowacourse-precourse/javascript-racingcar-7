import Car from "./models/car.js";
import { getInput, printResult } from "./libs/utils.js";

class App {
  async run() {
    const rounds = await getInput("시도할 횟수는 몇 회인가요?");
    const carsName = ["a", "b", "c"];
    const cars = carsName.map((car) => new Car(car));
    for (let i = 0; i < rounds; i++) {
      cars.forEach((car) => {
        car.moveForward();
        printResult(`${car.name} : ${car.position}`);
      });
    }
  }
}

export default App;
