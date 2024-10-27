import { isAdvancePossible } from '../util/util.js';

export class CarModel {
  #name;
  #advancedCount;
  constructor(name) {
    this.#name = name;
    this.#advancedCount = 0;
  }

  getName() {
    return this.#name;
  }

  getAdvancedCount() {
    return this.#advancedCount;
  }

  advanceOnRandom() {
    if (isAdvancePossible()) {
      this.#advancedCount += 1;
    }
  }
}
