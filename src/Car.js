import { pickNumberInRange, printResult } from './util/missionUtil.js';

class Car {
  #name;
  #distance = '';
  #min = 0;
  #max = 9;

  constructor(name) {
    this.#name = name;
  }

  async getMoveForwardResult() {
    const randomValue = await pickNumberInRange(this.#min, this.#max);
    const isOver4 = randomValue >= 4;
    if (isOver4) {
      this.setDitance('-');
    }
    await printResult(`${this.#name} : ${this.#distance}`);
  }

  setDitance(distance) {
    this.#distance += distance;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }
}

export default Car;
