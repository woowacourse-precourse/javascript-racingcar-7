class Car {
  #forwadCount=0;

  constructor(name) {
    const name = name;
  }

  forward(random) {
    if (random >= 4 ){
      this.#forwadCount++;
    }
  }

  getForwardCount() {
    return this.#forwadCount;
  }
}

export default Car;