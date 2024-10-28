class Car {
  #forwadCount=0;
  #name;

  constructor(name) {
    this.#name = name;
  }

  forward() {
    this.#forwadCount++;
  }

  getName() {
    return this.#name;
  }

  getForwardCount() {
    return this.#forwadCount;
  }
}

export default Car;