import Car from "./Car.js";
import { Console } from "@woowacourse/mission-utils";

class Game {
  constructor() {
    this.cars = [];
  }

  initializeCars(carNames) {
    carNames.forEach((name) => {
      const car = new Car(name);
      this.cars.push(car);
    });
  }
}

export default Game;
