class Car {
  #name;
  #forwardCount;

  constructor(name) {
    this.#name = name;
    this.#forwardCount = 0;
  }

  moveForward() {
    this.#forwardCount += 1;
  }

  getForwardCount() {
    return this.#forwardCount;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
