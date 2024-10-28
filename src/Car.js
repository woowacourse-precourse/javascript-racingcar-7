import { pickNumberInRange, printOutput } from "./util/missionUtil";

export default class Car {
  #name;
  #position = "";
  #min = 0;
  #max = 9;

  constructor(name) {
    this.#name = name;
  }

  moveForward() {
    const RANDOM_NUMBER = pickNumberInRange(this.#min, this.#max);
    if (RANDOM_NUMBER >= 4) {
      this.setPosition("-");
    }
    const STATUS = `${this.#name} : ${this.#position}`;
    return STATUS;
  }

  setPosition(position) {
    this.#position += position;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}
