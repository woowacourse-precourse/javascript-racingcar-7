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
}

export default LacingController;
