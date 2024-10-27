import Car from "./Car.js";
import RandomNumber from "../utils/RandomNumber.js";
import { STATIC_NUMBER } from "../static/Static.js";

export default class RaceManager {
  #cars;
  #attempts;

  constructor() {
    this.#cars = [];
  }

  setCars(cars) {
    this.#cars = cars;
  }

  setAttempts(attempts) {
    this.#attempts = attempts;
  }

  createCars(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  getAttempts() {
    return this.#attempts;
  }

  getCars() {
    return this.#cars;
  }

  moveAllCars() {
    this.#cars.forEach((car) => {
      const randomNumber = this.#generateRandomNumber();
      car.move(randomNumber);
    });
  }

  #generateRandomNumber() {
    return RandomNumber.pickNumberInRange(
      STATIC_NUMBER.game.MIN_RANDOM,
      STATIC_NUMBER.game.MAX_RANDOM,
    );
  }

  findWinners() {
    const maxPosition = this.#findMaxPosition();
    return this.#filterWinnersByPosition(maxPosition);
  }

  #findMaxPosition() {
    return Math.max(...this.#cars.map((car) => car.getPosition()));
  }

  #filterWinnersByPosition(maxPosition) {
    return this.#cars.filter((car) => car.getPosition() === maxPosition);
  }
}
