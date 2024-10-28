// @ts-check
import Validator from '../lib/Validator.js';

import { CarModel } from '../car/car.model.js';
import { RuleModel } from '../rule/rule.model.js';

export class RacingModel {
  /** @type {Array<CarModel>} */
  #cars;

  /** @type {number} */
  #trialNumber;

  /** @type {RuleModel} */
  #rule;

  /** @type {number} */
  #round;

  /** @type {Array<string>} */
  #winners;

  constructor() {
    this.#rule = new RuleModel(new Validator());
    this.#round = 0;
    this.#winners = [];
  }

  /**
   *
   * @param {Array<string>} cars
   * @returns {Array<CarModel>}
   */
  #createCars(cars) {
    return cars.map((car) => new CarModel(car));
  }

  /**
   *
   * @param {string} carNames
   */
  setCars(carNames) {
    this.#rule.validateCarNames(carNames);

    this.#cars = this.#createCars(this.#rule.parseCarNames(carNames));
  }

  /**
   *
   * @param {string} trialNumber
   */
  setTrialNumber(trialNumber) {
    this.#rule.validateTrialNumber(trialNumber);

    this.#trialNumber = Number(trialNumber);
  }

  /**
   *
   * @returns {Array<{ name: string; travelDistance: number }>}
   */
  getCarDetails() {
    return this.#cars.map((car) => car.getDetail());
  }

  /**
   *
   * @param {CarModel} car
   */
  #moveForward(car) {
    if (this.#rule.canMoveForward()) {
      car.moveForward();
    }
  }

  #increaseRound() {
    this.#round += 1;
  }

  race() {
    this.#cars.forEach((car) => this.#moveForward(car));
    this.#increaseRound();
  }

  /**
   *
   * @returns {boolean}
   */
  isRacing() {
    return this.#round !== this.#trialNumber;
  }

  /**
   *
   * @returns {Array<number>}
   */
  #getTravelDistances() {
    return this.getCarDetails().map(({ travelDistance }) => travelDistance);
  }

  /**
   *
   * @param {Array<number>} distances
   * @returns {number}
   */
  #calculateWinnerDistance(distances) {
    return Math.max(...distances);
  }

  /**
   *
   * @param {number} travelDistance
   * @returns {boolean}
   */
  #isWinner(travelDistance) {
    return travelDistance === this.#calculateWinnerDistance(this.#getTravelDistances());
  }

  /**
   *
   * @param {string} name
   * @param {number} travelDistance
   */
  #setWinner(name, travelDistance) {
    if (this.#isWinner(travelDistance)) {
      this.#winners.push(name);
    }
  }

  #setWinners() {
    this.getCarDetails().forEach(({ name, travelDistance }) =>
      this.#setWinner(name, travelDistance),
    );
  }

  /**
   *
   * @param {Array<string>} winners
   * @returns {string}
   */
  #parseWinners(winners) {
    if (winners.length === 1) {
      return winners[0];
    }

    return winners.join(', ');
  }

  /**
   *
   * @returns {string}
   */
  getWinners() {
    this.#setWinners();

    return this.#parseWinners(this.#winners);
  }
}
