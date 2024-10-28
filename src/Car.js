class Car {
  #forwadCount=0;
  #name;

  constructor(name) {
    this.#name = name;
  }

  forward(random) {
    if (random >= 4 ){
      this.#forwadCount++;
    }
  }

  getName() {
    return this.#name;
  }

  getForwardCount() {
    return this.#forwadCount;
  }
}

export default Car;