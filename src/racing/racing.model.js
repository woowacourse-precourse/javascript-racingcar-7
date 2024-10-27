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

  constructor() {
    this.#rule = new RuleModel(new Validator());
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
   * @param {CarModel} car
   */
  #moveForward(car) {
    if (this.#rule.canMoveForward()) {
      car.moveForward();
    }
  }

  race() {
    this.#cars.forEach((car) => this.#moveForward(car));
  }
}
