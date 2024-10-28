import Car from './Car.js';

/**
 *
 */
class RacingController {
  #cars;
  #count;

  /**
   *
   */
  setCars(cars) {
    this.#cars = cars.map((car) => new Car(car));
  }

  /**
   *
   */
  setCount(count) {
    this.#count = count;
  }

  /**
   *
   */
  run() {
    for (let i = 0; i < this.#count; i++) {
      this.#cars.forEach((car) => car.accelerate());
    }
  }
}

export default RacingController;
