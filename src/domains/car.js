import CAR from "../constants/car";

export default class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = CAR.DEFAULT_POSITION;
  }

  move() {
    this.#position += CAR.MOVE_DISTANCE;
  }

  get position() {
    return this.#position;
  }

  get name() {
    return this.#name;
  }
}
