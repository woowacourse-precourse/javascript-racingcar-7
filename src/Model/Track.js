import { ViewUtils } from "../Util/ViewUtils.js";
import View from "../View/View.js";
import { Car } from "./Car.js";

//@ts-check

export class Track {
  #view;

  /** @type {Car[]} */
  #cars = [];
  #numOfAttempts = 0;

  /**
   *
   * @param {View} view
   */
  constructor(view) {
    this.#view = view;
  }

  getCars() {
    return this.#cars;
  }

  /**
   * 사용자 인풋을 기반으로 track 위에 자동차들을 생성하고 초기값을 저장한다.
   * @param {Promise<{{carNames : string, numOfAttempts : number}}>} userInputs
   */
  async #createCar(userInputs) {
    const carNames = userInputs.carNames.split(",").map((name) => name.trim());

    this.#numOfAttempts = Number(userInputs.numOfAttempts);
    this.#cars = carNames.map((name) => new Car(name));
  }

  #proceedOneStep() {
    this.#cars.forEach((car) => car.moveForward());
  }

  #proceedOneStepWithOutput() {
    this.#proceedOneStep();
    this.#view.outputResult(this.#cars);
  }

  #pickWinner() {
    let maxDistance = 0;
    return this.#cars
      .sort((a, b) => {
        if (b.getDistance() > maxDistance) maxDistance = b.getDistance();
        return a.getDistance() < b.getDistance();
      })
      .filter((car) => Number(car.getDistance()) === maxDistance)
      .map((car) => car.getName());
  }

  async run() {
    const userInputs = await this.#view.inputInitialValue();
    await this.#createCar(userInputs);
    for (let i = 0; i < this.#numOfAttempts; i++) {
      this.#proceedOneStepWithOutput();
    }
    const winnerNames = this.#pickWinner();
    this.#view.outputWinner(winnerNames);
  }
}
