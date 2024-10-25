import Car from '../model/Car.js';

class LacingController {
  /** @type {Car[]} */
  cars = [];
  round = 0;

  /**
   * @returns {number}
   */
  getRound() {
    return this.round;
  }

  /**
   * @param {number} round
   * @returns {LacingController}
   */
  setRound(round) {
    this.round = round;
    return this;
  }

  /**
   * @returns {Car[]}
   */
  getCars() {
    return this.cars;
  }

  /**
   * @param {Car[]} cars
   * @returns {LacingController}
   */
  setCars(cars) {
    this.cars = cars;
    return this;
  }

  /**
   * @param {string[]} carNames
   * @param {number} times
   * @returns {LacingController}
   */
  init(carNames, times) {
    const cars = Array.from(carNames, (name) => new Car(name));
    this.setCars(cars);
    this.setRound(times);
    return this;
  }
}

export default LacingController;
