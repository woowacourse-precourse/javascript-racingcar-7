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
    const RANDOM_VALUE = await pickNumberInRange(this.#min, this.#max);
    const IS_OVER_4 = RANDOM_VALUE >= 4;
    if (IS_OVER_4) {
      this.setDitance('-');
    }
    const CAR_STATUS_STRING = `${this.#name} : ${this.#distance}\n`;
    return CAR_STATUS_STRING;
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
