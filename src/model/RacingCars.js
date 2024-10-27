import RacingCar from "./RacingCar.js";

class RacingCars {
  constructor() {
    this.racingCars = [];
  }

  registerCar(name) {
    const racingCar = new RacingCar(name);
    this.racingCars.push(racingCar);
  }

  getCarNames() {
    return this.racingCars.map((car) => car.name);
  }
}

export default RacingCars;
