import RacingCar from "./RacingCar.js";

class RacingCars {
  constructor() {
    this.racingCars = [];
  }

  registerCar(carName) {
    const newCar = new RacingCar(carName);
    this.racingCars.push(newCar);
  }

  getAllCars() {
    return this.racingCars;
  }

  moveAllCars() {
    this.racingCars.map((car) => {
      if (car.move()) {
        return (car.position += 1);
      }
    });
  }
}

export default RacingCars;
