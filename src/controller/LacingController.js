import Output from '../view/Output.js';
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

  /**
   * @returns {LacingController}
   */
  play() {
    const cars = this.getCars();
    const round = this.getRound();

    for (let r = 0; r < round; r += 1) {
      cars.forEach((car) => car.drive(r));
    }

    return this;
  }

  /**
   * @returns {Array<{ name: string; track: number; }[]>}
   */
  getRacingResult() {
    const cars = this.getCars();
    const length = this.getRound();

    return Array.from({ length }, (_, round) => {
      return cars.map((car) => ({
        name: car.getName(),
        track: car.getTrack(round),
      }));
    });
  }

  /**
   * @param {Array<{ name: string; track: number; }[]>} racingResult
   * @returns {string[]}
   */
  computeWinner(racingResult) {
    const round = this.getRound();
    const result = racingResult[round - 1];
    const maxTrack = result.reduce((max, car) => {
      if (max < car.track) return car.track;

      return max;
    }, 0);

    return result.reduce((winner, car) => {
      if (car.track === maxTrack) return [...winner, car.name];

      return winner;
    }, []);
  }

  printResult() {
    const result = this.getRacingResult();
    const winner = this.computeWinner(result);
    Output.printTitle();
    Output.printRacingResult(result);
    Output.printWinner(winner);
  }
}

export default LacingController;
