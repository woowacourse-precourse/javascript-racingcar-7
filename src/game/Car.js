export default class Car {
  #name = '';
  #distance = 0;

  constructor(name) {
    this.#name = name;
  }

  getDistance() {
    return this.#distance;
  }

  getName() {
    return this.#name;
  }

  move() {
    this.#distance++;
  }

  getDistanceAsString() {
    const distanceAsString = '-'.repeat(this.#distance);
    return distanceAsString;
  }
}
