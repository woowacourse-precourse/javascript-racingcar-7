import Car from "./Car.js";

class Race {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }
}

export default Race;
