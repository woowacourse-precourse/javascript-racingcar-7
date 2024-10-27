export class Car {
  #name;
  #distance;
  #PROGRESS = "-";

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  move(shouldMove) {
    if (shouldMove) this.#distance++;
  }

  getDistance() {
    return this.#distance;
  }

  getName() {
    return this.#name;
  }

  getStatus() {
    return `${this.#name} : ${this.#PROGRESS.repeat(this.#distance)}`;
  }
}
